"use client";
import React, { useState, useEffect } from "react";

const CountDown = () => {
  // Set the target date (Example: 10 days from now)
  const targetDate = new Date("2026-05-24T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      const calculateTime = targetDate - new Date().getTime();
      if (calculateTime >= 0) {
        setTimeLeft(calculateTime);
      } else {
        clearInterval(timer); // Stop timer when it reaches zero
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Logic to convert milliseconds into Days, Hours, Minutes, and Seconds
  const d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const h = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="font-bold text-5xl text-yellow-300">
      {/* Dynamic timer display with leading zeros */}
      {d}d : {h < 10 ? `0${h}` : h}h : {m < 10 ? `0${m}` : m}m : {s < 10 ? `0${s}` : s}s
    </div>
  );
};

export default CountDown;