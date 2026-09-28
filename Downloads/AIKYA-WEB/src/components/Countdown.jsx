import { useEffect, useState } from "react";

const TARGET_DATE = new Date("October 5, 2026 09:30:00").getTime();

function calculateTimeLeft() {
  const difference = TARGET_DATE - new Date().getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section">
      <div className="countdown-decor-strip">
        <span className="decor-bracket">[</span>
        <span className="decor-status-text">MISSION LAUNCH COUNTDOWN // T-MINUS</span>
        <span className="decor-bracket">]</span>
      </div>

      <div className="countdown-hud-frame">
        <div className="countdown-unit-card">
          <div className="unit-corner tl"></div>
          <div className="unit-corner tr"></div>
          <div className="unit-corner bl"></div>
          <div className="unit-corner br"></div>
          <span className="unit-value">{String(timeLeft.days).padStart(2, "0")}</span>
          <span className="unit-label">DAYS</span>
          <span className="unit-micro">SOLAR CYCLES</span>
        </div>

        <div className="countdown-separator">:</div>

        <div className="countdown-unit-card">
          <div className="unit-corner tl"></div>
          <div className="unit-corner tr"></div>
          <div className="unit-corner bl"></div>
          <div className="unit-corner br"></div>
          <span className="unit-value">{String(timeLeft.hours).padStart(2, "0")}</span>
          <span className="unit-label">HOURS</span>
          <span className="unit-micro">STD INTERVAL</span>
        </div>

        <div className="countdown-separator">:</div>

        <div className="countdown-unit-card">
          <div className="unit-corner tl"></div>
          <div className="unit-corner tr"></div>
          <div className="unit-corner bl"></div>
          <div className="unit-corner br"></div>
          <span className="unit-value">{String(timeLeft.minutes).padStart(2, "0")}</span>
          <span className="unit-label">MINUTES</span>
          <span className="unit-micro">ORBITAL MARGIN</span>
        </div>

        <div className="countdown-separator">:</div>

        <div className="countdown-unit-card pulse-accent">
          <div className="unit-corner tl"></div>
          <div className="unit-corner tr"></div>
          <div className="unit-corner bl"></div>
          <div className="unit-corner br"></div>
          <span className="unit-value">{String(timeLeft.seconds).padStart(2, "0")}</span>
          <span className="unit-label">SECONDS</span>
          <span className="unit-micro">TELEMETRY SYNC</span>
        </div>
      </div>

      <p className="countdown-subtext">
        OCTOBER 05 - 06, 2026 &bull; COLLEGE AUDITORIUM & ECE COMPLEX
      </p>
    </section>
  );
}

export default Countdown;