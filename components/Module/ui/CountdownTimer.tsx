import { useEffect, useState } from "react";
import "../../../app/globals.css";
export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2025-06-30T23:59:59").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="box-timer">
      <div className="countdown-timer flex justify-center">
        <div className="number days-section">
          <span className="timer-value days-value">{timeLeft.days}</span>
        </div>
        <span className="dot">:</span>
        <div className="number hours-section">
          <span className="timer-value hours-value">{timeLeft.hours}</span>
        </div>
        <span className="dot">:</span>
        <div className="number minutes-section">
          <span className="timer-value minutes-value">{timeLeft.minutes}</span>
        </div>
        <span className="dot">:</span>
        <div className="number seconds-section">
          <span className="timer-value seconds-value">{timeLeft.seconds}</span>
        </div>
      </div>
      <div className="timer-message">
        <span className="timer-message-text"></span>
      </div>
    </div>
  );
}
