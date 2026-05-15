"use client";

import React, { useState, useEffect } from "react";

const CountDown = () => {
  const targetDate = new Date("2026-05-24T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    const updateTimer = () => {
      const calculateTime = targetDate - Date.now();

      if (calculateTime >= 0) {
        setTimeLeft(calculateTime);
      } else {
        setTimeLeft(0);
      }
    };

    updateTimer();

    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // منع hydration mismatch
  if (timeLeft === null) {
    return (
      <div className="font-bold text-5xl text-yellow-300">
        Loading...
      </div>
    );
  }

  const d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const h = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const m = Math.floor(
    (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
  );
  const s = Math.floor(
    (timeLeft % (1000 * 60)) / 1000
  );

  return (
    <div className="font-bold text-5xl text-yellow-300">
      {d}d : {h < 10 ? `0${h}` : h}h :
      {m < 10 ? `0${m}` : m}m :
      {s < 10 ? `0${s}` : s}s
    </div>
  );
};

export default CountDown;