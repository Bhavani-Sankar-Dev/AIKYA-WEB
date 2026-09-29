import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import vaderImg from "../assets/vader.jpeg";

function Hero() {
  const [introFinished, setIntroFinished] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setIntroFinished(true);
      return undefined;
    }

    const introTimer = window.setTimeout(() => setIntroFinished(true), 2600);
    return () => window.clearTimeout(introTimer);
  }, [prefersReducedMotion]);

  return (
    <section className="hero-section">
      {/* Background Starfield & Atmosphere */}
      <div className="hero-cosmic-bg">
        <div className="stars-layer-1"></div>
        <div className="stars-layer-2"></div>
        <div className="atmospheric-nebula red-nebula"></div>
        <div className="atmospheric-nebula blue-nebula"></div>
        <div className="telemetry-grid-overlay"></div>
      </div>

      <motion.div
        className="hero-vader-intro"
        initial={{ opacity: 0, y: "100%" }}
        animate={introFinished ? { opacity: 0, y: "-100%" } : { opacity: 1, y: 0 }}
        transition={
          prefersReducedMotion
            ? { duration: 0.2, y: { duration: 0 } }
            : {
                opacity: { duration: introFinished ? 1 : 0.55, ease: "easeInOut" },
                y: { duration: introFinished ? 1.1 : 1.6, ease: [0.16, 1, 0.3, 1] },
              }
        }
      >
        <img src={vaderImg} alt="" className="hero-vader-intro-image" />
        <div className="hero-vader-intro-shade"></div>
        <p className="hero-vader-intro-title">Welcome to the galaxy</p>
      </motion.div>

      {/* Telemetry Coordinates Header */}
      <div className="hero-telemetry-strip">
        <span className="telemetry-item">COORD: 16.347° N // 80.528° E</span>
        <span className="telemetry-divider">|</span>
        <span className="telemetry-item status-live">
          <span className="live-pip"></span>
          SYS.ONLINE
        </span>
        <span className="telemetry-divider">|</span>
        <span className="telemetry-item">FREQ: 1420.405 MHz</span>
      </div>

      <div className="hero-stage">
        {/* AIKYA Title & Fest Content */}
        <motion.div
          className="hero-center-content"
          initial={{ opacity: 0, y: 24 }}
          animate={introFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{
            delay: introFinished && !prefersReducedMotion ? 0.65 : 0,
            duration: prefersReducedMotion ? 0.3 : 1.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="hero-badge-pill">
            <span className="pill-dot"></span>
            DEPARTMENT OF ELECTRONICS & COMMUNICATION ENGINEERING
          </div>

          <p className="hero-fest-subtitle">ECE TECHNICAL FEST</p>

          <div className="hero-title-lockup">
            <h1 className="hero-main-title">
              AIKYA
              <span className="hero-edition-year">2026</span>
            </h1>
          </div>

          <p className="hero-tagline-text">
            A GALAXY OF TECHNOLOGY AWAITS
          </p>

          <div className="hero-brief-summary">
            12 High-Stakes Technical Missions &bull; Circuitry, Code , Autonomous Systems & Hardware Innovation
          </div>

          {/* Call to Actions */}
          <div className="hero-cta-group">
            <Link to="/events" className="btn-primary-glow">
              <span className="btn-text">EXPLORE MISSIONS</span>
              <span className="btn-icon">→</span>
            </Link>

            <Link to="/registration" className="btn-secondary-ghost">
              <span className="btn-text">JOIN THE MISSION</span>
            </Link>
          </div>

          {/* Quick HUD Metrics */}
          <div className="hero-hud-stats">
            <div className="hud-stat-box">
              <span className="hud-val">12</span>
              <span className="hud-label">MISSIONS</span>
            </div>
            <div className="hud-divider"></div>
            <div className="hud-stat-box">
              <span className="hud-val">02</span>
              <span className="hud-label">DAYS</span>
            </div>
            
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="hero-scroll-cue">
        <span className="scroll-cue-txt">INITIALIZE PROTOCOL</span>
        <div className="scroll-cue-track">
          <div className="scroll-cue-thumb"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;