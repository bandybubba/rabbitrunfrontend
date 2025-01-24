// src/App.jsx
import { useState, useEffect } from "react";
import { ethers } from "ethers";

// Adjust paths/names depending on how you exported your JSON
import CasinoTokenABI from "./contracts/CasinoTokenABI.json";
import RabbitRunGameABI from "./contracts/RabbitRunGameABI.json";

function App() {
  // Replace these with your deployed Sepolia addresses
  const CASINO_TOKEN_ADDRESS = "0xF9f4CEF0aC44ac2fE94Cb1e3D5bcA3594607490e";
  const RABBIT_RUN_GAME_ADDRESS = "0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8";

  // React state
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  // We’ll keep references to the contract objects
  const [casinoToken, setCasinoToken] = useState(null);
  const [rabbitRunGame, setRabbitRunGame] = useState(null);

  const [balance, setBalance] = useState("0");  // CasinoToken balance
  const [rabbitNumber, setRabbitNumber] = useState("");
  const [betAmount, setBetAmount] = useState("");

  const [testingMode, setTestingMode] = useState(false);

  // 1) Connect to Metamask
  async function connectWallet() {
    if (!window.ethereum) {
      alert("Please install Metamask!");
      return;
    }

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const _provider = new ethers.BrowserProvider(window.ethereum);
      const _signer = await _provider.getSigner();
      const _account = await _signer.getAddress();

      setProvider(_provider);
      setSigner(_signer);
      setAccount(_account);

      // Create contract instances
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

      console.log("Connected as:", _account);
      alert("Connected to Metamask!");
    } catch (err) {
      console.error(err);
      alert("Failed to connect wallet.");
    }
  }

  // 2) Fetch CasinoToken balance for the connected account
  async function fetchBalance() {
    if (!casinoToken || !account) return;
    try {
      const bal = await casinoToken.balanceOf(account);
      setBalance(ethers.formatEther(bal));
    } catch (err) {
      console.error(err);
      alert("Failed to fetch balance.");
    }
  }

  // 3) Approve tokens for the game contract
  async function approveTokens() {
    if (!casinoToken || !betAmount) {
      alert("Need betAmount first.");
      return;
    }
    try {
      const tx = await casinoToken.approve(
        RABBIT_RUN_GAME_ADDRESS,
        ethers.parseEther(betAmount)
      );
      await tx.wait();
      alert("Tokens approved!");
    } catch (err) {
      console.error(err);
      alert("Approval failed.");
    }
  }

  // 4) Place bet
  async function placeBet() {
    if (!rabbitRunGame || !betAmount || !rabbitNumber) {
      alert("Need betAmount and rabbitNumber.");
      return;
    }
    try {
      const tx = await rabbitRunGame.placeBet(
        parseInt(rabbitNumber),
        ethers.parseEther(betAmount)
      );
      await tx.wait();
      alert("Bet placed!");
    } catch (err) {
      console.error(err);
      alert("Bet failed.");
    }
  }

  // 5) Start the race
  async function startRace() {
    if (!rabbitRunGame) return;
    try {
      const tx = await rabbitRunGame.startRace();
      await tx.wait();
      alert("Race started! If testingMode=false, wait for VRF callback. If true, call testFulfillRandomWords.");
    } catch (err) {
      console.error(err);
      alert("startRace failed.");
    }
  }

  // (Optional) Manually fulfill random words (only if testingMode == true & you are rakeWallet)
  async function testFulfillRandomWords(fakeNumber) {
    if (!rabbitRunGame) return;
    try {
      const tx = await rabbitRunGame.testFulfillRandomWords(fakeNumber);
      await tx.wait();
      alert("Simulated VRF with " + fakeNumber);
    } catch (err) {
      console.error(err);
      alert("Manual VRF failed. Are you rakeWallet? testingMode on?");
    }
  }

  // 6) Check testingMode from chain
  async function checkTestingMode() {
    if (!rabbitRunGame) return;
    try {
      const mode = await rabbitRunGame.testingMode();
      setTestingMode(mode);
    } catch (err) {
      console.error(err);
      alert("Failed to read testingMode.");
    }
  }

  // 7) Optionally toggle testingMode
  async function toggleTestingMode() {
    if (!rabbitRunGame) return;
    try {
      const newMode = !testingMode;
      const tx = await rabbitRunGame.toggleTestingMode(newMode);
      await tx.wait();
      alert("Testing mode set to: " + newMode);
      setTestingMode(newMode);
    } catch (err) {
      console.error(err);
      alert("Toggle testingMode failed. Are you rakeWallet?");
    }
  }

  // Refresh balance any time we have a contract & account
  useEffect(() => {
    if (casinoToken && account) {
      fetchBalance();
    }
  }, [casinoToken, account]);

  return (
    <div style={{ padding: 20 }}>
      <h1>RabbitRun Game UI (Sepolia VRF v2.5)</h1>
      {!account && (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
      {account && <p>Connected as: {account}</p>}

      <div style={{ marginTop: 10 }}>
        <button onClick={fetchBalance}>Refresh Balance</button>
        <p>Your CasinoToken balance: {balance} CST</p>
      </div>

      <hr />

      <div>
        <h2>Bet Setup</h2>
        <label>Rabbit # (1..10): </label>
        <input
          type="number"
          value={rabbitNumber}
          onChange={(e) => setRabbitNumber(e.target.value)}
        />
        <br />

        <label>Bet Amount (CST): </label>
        <input
          type="text"
          value={betAmount}
          onChange={(e) => setBetAmount(e.target.value)}
        />
        <br />

        <button onClick={approveTokens}>Approve Tokens</button>
        <button onClick={placeBet}>Place Bet</button>
      </div>

      <div style={{ marginTop: 10 }}>
        <button onClick={startRace}>Start Race</button>
      </div>

      <hr />

      <div>
        <h2>Testing Mode Section</h2>
        <button onClick={checkTestingMode}>Check Testing Mode</button>
        <p>Current Mode: {testingMode ? "TESTING (true)" : "REAL VRF (false)"}</p>
        <button onClick={toggleTestingMode}>
          Toggle Testing Mode
        </button>
        <br />

        <label>Fake Random #: </label>
        <button onClick={() => testFulfillRandomWords(42)}>
          testFulfillRandomWords(42)
        </button>
      </div>
    </div>
  );
}

export default App;
