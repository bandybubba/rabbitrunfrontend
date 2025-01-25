// src/App.jsx
import { useState, useEffect } from "react";
import { ethers } from "ethers";

import "./App.css";
import CasinoTokenABI from "./contracts/CasinoTokenABI.json";
import RabbitRunGameABI from "./contracts/RabbitRunGameABI.json";

import RaceTrack from "./RaceTrack";
import "./RaceTrack.css";

function App() {
  // Replace these with your addresses
  const CASINO_TOKEN_ADDRESS = "0xF9f4CEF0aC44ac2fE94Cb1e3D5bcA3594607490e";
  const RABBIT_RUN_GAME_ADDRESS = "0xe3188b1b0c230bd9035ed3392b3b57f3923df7b4";

  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  const [casinoToken, setCasinoToken] = useState(null);
  const [rabbitRunGame, setRabbitRunGame] = useState(null);

  const [balance, setBalance] = useState("0");
  const [rabbitNumber, setRabbitNumber] = useState("");
  const [betAmount, setBetAmount] = useState("");
  const [testingMode, setTestingMode] = useState(false);

  const [lastRaceResult, setLastRaceResult] = useState(null);
  const [isRaceActive, setIsRaceActive] = useState(false);

  // We'll use this for user feedback or status messages
  const [statusMessage, setStatusMessage] = useState("");

  // --- NEW: off-canvas menu state ---
  const [menuOpen, setMenuOpen] = useState(false);

  // --- NEW: which page is active? ---
  const [activePage, setActivePage] = useState("rabbit-run");

  // 1) Connect to Metamask
  async function connectWallet() {
    if (!window.ethereum) {
      alert("Please install Metamask!");
      return;
    }
    try {
      setStatusMessage("Connecting wallet...");
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const _provider = new ethers.BrowserProvider(window.ethereum);
      const _signer = await _provider.getSigner();
      const _account = await _signer.getAddress();

      setProvider(_provider);
      setSigner(_signer);
      setAccount(_account);

      // Instantiate contracts
      const casinoTokenContract = new ethers.Contract(
        CASINO_TOKEN_ADDRESS,
        CasinoTokenABI,
        _signer
      );
      setCasinoToken(casinoTokenContract);

      const rabbitRunContract = new ethers.Contract(
        RABBIT_RUN_GAME_ADDRESS,
        RabbitRunGameABI,
        _signer
      );
      setRabbitRunGame(rabbitRunContract);

      setStatusMessage("Wallet connected.");
    } catch (err) {
      console.error(err);
      setStatusMessage("Failed to connect wallet.");
    }
  }

  // 2) Fetch CasinoToken balance
  async function fetchBalance() {
    if (!casinoToken || !account) return;
    try {
      setStatusMessage("Fetching balance...");
      const bal = await casinoToken.balanceOf(account);
      setBalance(ethers.formatEther(bal));
      setStatusMessage("");
    } catch (err) {
      console.error(err);
      setStatusMessage("Failed to fetch balance.");
    }
  }

  // 3) Approve tokens
  async function approveTokens() {
    if (!casinoToken || !betAmount) {
      alert("Enter a betAmount first.");
      return;
    }
    try {
      setStatusMessage("Approving tokens...");
      const tx = await casinoToken.approve(
        RABBIT_RUN_GAME_ADDRESS,
        ethers.parseEther(betAmount)
      );
      await tx.wait();
      setStatusMessage("Tokens approved!");
    } catch (err) {
      console.error(err);
      setStatusMessage("Approval failed.");
    }
  }

  // 4) Place bet
  async function placeBet() {
    if (!rabbitRunGame || !betAmount || !rabbitNumber) {
      alert("Enter betAmount and rabbitNumber first.");
      return;
    }
    try {
      setStatusMessage(
        `Placing bet on Rabbit #${rabbitNumber} for ${betAmount} CST...`
      );
      const tx = await rabbitRunGame.placeBet(
        parseInt(rabbitNumber),
        ethers.parseEther(betAmount)
      );
      await tx.wait();
      setStatusMessage("Bet placed!");
    } catch (err) {
      console.error(err);
      setStatusMessage("Bet failed.");
    }
  }

  // 5) Start Race
  async function startRace() {
    if (!rabbitRunGame) return;
    try {
      setStatusMessage("Starting race...");
      setIsRaceActive(true); // show the animation

      const tx = await rabbitRunGame.startRace();
      await tx.wait();

      setStatusMessage(
        "Race started! If testingMode=false, wait for VRF. If true, call testFulfillRandomWords."
      );
    } catch (err) {
      console.error(err);
      setStatusMessage("startRace failed.");
      setIsRaceActive(false);
    }
  }

  // Testing fallback
  async function testFulfillRandomWords(fakeNumber) {
    if (!rabbitRunGame) return;
    try {
      setStatusMessage(`Simulating VRF with ${fakeNumber}...`);
      const tx = await rabbitRunGame.testFulfillRandomWords(fakeNumber);
      await tx.wait();
      setStatusMessage("Simulated VRF done.");
    } catch (err) {
      console.error(err);
      setStatusMessage(
        "Manual VRF failed. Are you rakeWallet? testingMode on?"
      );
    }
  }

  // Check testing mode from contract
  async function checkTestingMode() {
    if (!rabbitRunGame) return;
    try {
      const mode = await rabbitRunGame.testingMode();
      setTestingMode(mode);
      setStatusMessage(`testingMode: ${mode}`);
    } catch (err) {
      console.error(err);
      setStatusMessage("Failed to read testingMode.");
    }
  }

  // Toggle testing mode
  async function toggleTestingMode() {
    if (!rabbitRunGame) return;
    try {
      setStatusMessage("Toggling testing mode...");
      const newMode = !testingMode;
      const tx = await rabbitRunGame.toggleTestingMode(newMode);
      await tx.wait();
      setTestingMode(newMode);
      setStatusMessage(`testingMode = ${newMode}`);
    } catch (err) {
      console.error(err);
      setStatusMessage("Toggle testingMode failed. Are you rakeWallet?");
    }
  }

  // On component or contract load, fetch balance if we have them
  useEffect(() => {
    if (casinoToken && account) {
      fetchBalance();
    }
  }, [casinoToken, account]);

  // Listen for the RaceResult event
  useEffect(() => {
    if (!rabbitRunGame || !account) return;

    const handleRaceResult = (user, winningRabbit, didWin, payout) => {
      setIsRaceActive(false);
      let msg = `Race is over! Rabbit #${winningRabbit} won.`;
      if (user.toLowerCase() === account.toLowerCase()) {
        msg += didWin ? " You WON your bet!" : " You lost the bet.";
      }

      setLastRaceResult({
        user,
        winningRabbit: Number(winningRabbit),
        didWin,
        payout: ethers.formatEther(payout),
      });
      setStatusMessage(msg);
    };

    rabbitRunGame.on("RaceResult", handleRaceResult);
    return () => {
      rabbitRunGame.off("RaceResult", handleRaceResult);
    };
  }, [rabbitRunGame, account]);

  // --- Helper function to render the Rabbit Run page ---
  const renderRabbitRunPage = () => {
    return (
      <div>
        <h2>Rabbit Run Casino</h2>
        {!account && <button onClick={connectWallet}>Connect Wallet</button>}
        {account && <p>Connected as: {account}</p>}

        <button onClick={fetchBalance}>Refresh Balance</button>
        <p>Your balance: {balance} CST</p>

        <hr style={{ margin: "10px 0" }} />

        <p>Rabbit # (1..10):</p>
        <input
          type="number"
          value={rabbitNumber}
          onChange={(e) => setRabbitNumber(e.target.value)}
        />

        <p>Bet Amount (CST):</p>
        <input
          type="text"
          value={betAmount}
          onChange={(e) => setBetAmount(e.target.value)}
        />

        <button onClick={approveTokens}>Approve</button>
        <button onClick={placeBet}>Place Bet</button>
        <button onClick={startRace}>Start Race</button>

        <hr style={{ margin: "10px 0" }} />

        <button onClick={checkTestingMode}>Check Testing Mode</button>
        <p>Mode: {testingMode ? "TESTING" : "REAL VRF"}</p>
        <button onClick={toggleTestingMode}>Toggle Testing</button>
        <button onClick={() => testFulfillRandomWords(42)}>
          testFulfill(42)
        </button>

        <div className="status-message">{statusMessage}</div>

        <div style={{ marginTop: "40px" }}>
          {/* RaceTrack area */}
          <RaceTrack
            winningRabbit={lastRaceResult?.winningRabbit || 0}
            raceInProgress={isRaceActive}
          />
        </div>

        {/* Info area at the bottom */}
        <div className="info-area">
          <h2>Last Race Result</h2>
          {lastRaceResult ? (
            <>
              <p>User: {lastRaceResult.user}</p>
              <p>Winning Rabbit: {lastRaceResult.winningRabbit}</p>
              <p>Did YOU Win? {lastRaceResult.didWin ? "YES" : "NO"}</p>
              <p>Payout: {lastRaceResult.payout} CST</p>
            </>
          ) : (
            <p>No recent race result yet.</p>
          )}
        </div>
      </div>
    );
  };

  // --- Placeholder for Blackjack ---
  const renderBlackjackPage = () => {
    return (
      <div className="placeholder">
        <h2>Blackjack (Coming Soon)</h2>
        <p>This is just a placeholder for Blackjack.</p>
      </div>
    );
  };

  // --- Placeholder for other pages ---
  const renderPlaceholderPage = (name) => {
    return (
      <div className="placeholder">
        <h2>{name}</h2>
        <p>More content coming soon...</p>
      </div>
    );
  };

  // Which "page" to show in the main content
  const renderMainContent = () => {
    switch (activePage) {
      case "rabbit-run":
        return renderRabbitRunPage();
      case "blackjack":
        return renderBlackjackPage();
      case "placeholder1":
        return renderPlaceholderPage("Placeholder Page 1");
      case "placeholder2":
        return renderPlaceholderPage("Placeholder Page 2");
      default:
        return (
          <div className="placeholder">
            <h2>404</h2>
            <p>Page not found.</p>
          </div>
        );
    }
  };

  // Toggle the off-canvas menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking a link
  const handleMenuClick = (page) => {
    setActivePage(page);
    setMenuOpen(false);
  };

  return (
    <div className="app-container">
      {/* Off-canvas wrapper so we can overlay the nav */}
      <div className="off-canvas-wrapper">
        {/* The button that toggles the menu */}
        <button className="off-canvas-menu-button" onClick={toggleMenu}>
          {menuOpen ? "Close Menu" : "Open Menu"}
        </button>

        {/* The actual off-canvas menu */}
        <nav className={`off-canvas-menu ${menuOpen ? "open" : ""}`}>
          <h2>Menu</h2>
          <ul>
            <li onClick={() => handleMenuClick("rabbit-run")}>Rabbit Run</li>
            <li onClick={() => handleMenuClick("blackjack")}>Blackjack</li>
            <li onClick={() => handleMenuClick("placeholder1")}>Placeholder 1</li>
            <li onClick={() => handleMenuClick("placeholder2")}>Placeholder 2</li>
          </ul>
        </nav>
      </div>

      {/* Main content area */}
      <div className="main-content">
        {renderMainContent()}
      </div>
    </div>
  );
}

export default App;
