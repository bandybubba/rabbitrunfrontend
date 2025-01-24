// src/RaceTrack.jsx
import { useState, useEffect } from "react";
import "./RaceTrack.css";

/**
 * @param {object} props
 * @param {number} props.winningRabbit The rabbit that won the race (1..10). If 0 or null, no winner yet.
 * @param {boolean} props.raceInProgress True if the race is ongoing, false if not.
 */
function RaceTrack({ winningRabbit, raceInProgress }) {
  const [positions, setPositions] = useState(Array(10).fill(0));
  const [running, setRunning] = useState(false);

  // When raceInProgress changes, we either start or stop
  useEffect(() => {
    if (raceInProgress) {
      // Reset positions to 0 at start
      setPositions(Array(10).fill(0));
      setRunning(true);
    } else {
      // Race ended or not active
      setRunning(false);
    }
  }, [raceInProgress]);

  // Animate positions if running
  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      // Update each rabbit's position randomly
      setPositions((prev) => {
        return prev.map((pos) => {
          if (pos >= 100) return 100;
          // random step between 0.5% and 2%
          const step = Math.random() * 1.5 + 0.5;
          return Math.min(pos + step, 100);
        });
      });
    }, 500);

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="race-container">
      {positions.map((pos, index) => {
        const rabbitIndex = index + 1; // from 1..10
        const isWinner = winningRabbit === rabbitIndex;

        return (
          <div key={rabbitIndex} className="lane">
            <div
              className={`rabbit ${isWinner ? "winner" : ""}`}
              style={{ left: `${pos}%` }}
            >
              Rabbit {rabbitIndex}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RaceTrack;
