import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="page-shell about-page-shell">
      <Navbar />

      <main className="about-page-main">
        {/* About Hero Section */}
        <section className="about-hero-section">
          <div className="about-hero-backdrop">
            <div className="stars-layer-1"></div>
            <div className="atmospheric-nebula red-nebula"></div>
          </div>

          <div className="section-container">
            <div className="about-hero-content">
              <div className="editorial-meta-tag">
                <span className="meta-pip"></span>
                <span>DOSSIER // AIKYA 2026 ARCHIVE</span>
              </div>

              <h1 className="about-hero-title">
                THE FORCE OF <br />
                <span className="gradient-text-sith">TECHNOLOGY</span>
              </h1>

              <p className="about-hero-lead">
                AIKYA is the preeminent technical symposium organized by the Department of
                Electronics & Communication Engineering. A platform designed to challenge,
                inspire, and showcase the pinnacle of student-driven technological innovation.
              </p>

              <div className="about-hero-tags">
                <span className="hero-spec-tag">EST. BIENNIAL</span>
                <span className="hero-spec-tag">ECE DEPARTMENT</span>
                <span className="hero-spec-tag">14 TOURNAMENTS</span>
                <span className="hero-spec-tag">NATIONAL REACH</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 01: About the Fest */}
        <section className="about-pillar-section">
          <div className="section-container">
            <div className="pillar-layout">
              <div className="pillar-number-column">
                <span className="pillar-huge-num">01</span>
                <span className="pillar-num-sub">CHRONICLE</span>
              </div>

              <div className="pillar-content-column">
                <div className="pillar-badge">ABOUT THE FEST</div>
                <h2 className="pillar-heading">
                  WHERE IDEAS CONVERGE <br />
                  AND BECOME SILICON REALITY
                </h2>

                <p className="pillar-paragraph">
                  AIKYA was conceived as an arena where pure theoretical electronics, signal
                  processing mathematics, and digital logic intersect with high-stakes creative
                  execution. What began as a departmental gathering has scaled into a flagship
                  inter-college celebration of electronic and computational engineering.
                </p>

                <p className="pillar-paragraph">
                  Over two rigorous days, university students, aspiring hardware designers,
                  robotics teams, and firmware developers converge to tackle industry-modeled
                  problem statements, live fault-isolation scenarios, and high-frequency communication trials.
                </p>

                <div className="pillar-stats-grid">
                  <div className="pillar-stat-box">
                    <span className="p-stat-val">500+</span>
                    <span className="p-stat-lbl">Active Operatives</span>
                  </div>
                  <div className="pillar-stat-box">
                    <span className="p-stat-val">30+</span>
                    <span className="p-stat-lbl">Institutions Represented</span>
                  </div>
                  <div className="pillar-stat-box">
                    <span className="p-stat-val">₹50K+</span>
                    <span className="p-stat-lbl">Prize Matrix</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: This Year's Theme */}
        <section className="about-pillar-section theme-section-highlight">
          <div className="pcb-trace-diagonal"></div>
          <div className="section-container">
            <div className="pillar-layout">
              <div className="pillar-number-column">
                <span className="pillar-huge-num theme-gold-num">02</span>
                <span className="pillar-num-sub">VISION</span>
              </div>

              <div className="pillar-content-column">
                <div className="pillar-badge theme-gold-badge">THIS YEAR'S THEME</div>
                <h2 className="pillar-heading">
                  A GALAXY OF <br />
                  <span className="gradient-text-sith">TECHNOLOGY</span>
                </h2>

                <p className="pillar-paragraph">
                  The theme for 2026—<strong>A Galaxy of Technology</strong>—captures the spirit
                  of frontier exploration. Just as deep-space missions require resilient avionics,
                  noise-immune telemetry, and fail-safe logic, modern engineers must pioneer
                  solutions that endure extreme constraints.
                </p>

                <p className="pillar-paragraph">
                  By blending cinematic science fiction aesthetics with rigorous ECE fundamentals,
                  AIKYA creates an unforgettable atmosphere where every challenge feels like a
                  critical space mission, and every circuit built is a step toward future exploration.
                </p>

                <div className="theme-pillars-row">
                  <div className="theme-mini-card">
                    <span className="mini-card-icon">⚡</span>
                    <h4>Resilient Silicon</h4>
                    <p>Analog precision, VLSI minimization, and fault-tolerant architecture.</p>
                  </div>
                  <div className="theme-mini-card">
                    <span className="mini-card-icon">📡</span>
                    <h4>Spatial Telemetry</h4>
                    <p>RF modulation, digital filtering, and quantum cryptographic concepts.</p>
                  </div>
                  <div className="theme-mini-card">
                    <span className="mini-card-icon">🤖</span>
                    <h4>Autonomous Systems</h4>
                    <p>Robotic traversal, embedded firmware, and real-time sensor fusion.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 03: What Awaits */}
        <section className="about-pillar-section">
          <div className="section-container">
            <div className="pillar-layout">
              <div className="pillar-number-column">
                <span className="pillar-huge-num">03</span>
                <span className="pillar-num-sub">OBJECTIVES</span>
              </div>

              <div className="pillar-content-column">
                <div className="pillar-badge">MISSION PILLARS</div>
                <h2 className="pillar-heading">
                  WHAT AWAITS <br />
                  AT AIKYA 2026
                </h2>

                <div className="mission-pillars-grid">
                  <div className="pillar-box">
                    <span className="box-step">01</span>
                    <h3 className="box-title">COMPETE</h3>
                    <p className="box-desc">
                      Battle against the sharpest minds in 14 precision challenges spanning
                      signal relay decryption, hardware troubleshooting, speed coding, and robotics.
                    </p>
                  </div>

                  <div className="pillar-box">
                    <span className="box-step">02</span>
                    <h3 className="box-title">CREATE</h3>
                    <p className="box-desc">
                      Fabricate physical circuit assemblies, craft optimized microcontroller
                      firmware, and bring original hardware prototypes into the limelight.
                    </p>
                  </div>

                  <div className="pillar-box">
                    <span className="box-step">03</span>
                    <h3 className="box-title">CONNECT</h3>
                    <p className="box-desc">
                      Network with visiting academics, industry delegates, research alumni,
                      and enthusiastic peers from premier engineering academies.
                    </p>
                  </div>

                  <div className="pillar-box">
                    <span className="box-step">04</span>
                    <h3 className="box-title">EXPLORE</h3>
                    <p className="box-desc">
                      Discover emergent frontiers in optoelectronics, IoT telemetry, satellite
                      communications, and real-time digital synthesis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Call to Action */}
        <section className="about-bottom-cta">
          <div className="section-container">
            <div className="about-cta-card">
              <div className="cta-card-content">
                <span className="cta-card-tag">STATUS: ALL PROTOCOLS ACTIVE</span>
                <h3 className="cta-card-title">Ready to Prove Your Engineering Caliber?</h3>
                <p className="cta-card-desc">
                  Browse the complete roster of Day 1 and Day 2 missions, or initiate your registration credentials immediately.
                </p>
              </div>
              <div className="cta-card-actions">
                <Link to="/events" className="btn-primary-glow">
                  VIEW MISSIONS →
                </Link>
                <Link to="/registration" className="btn-secondary-ghost">
                  REGISTER NOW
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;