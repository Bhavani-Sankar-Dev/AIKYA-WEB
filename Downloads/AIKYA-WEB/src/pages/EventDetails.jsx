import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import events from "../data/events";

function EventDetails() {
  const { eventId } = useParams();

  const event = events.find((e) => e.id === eventId);

  // If event is not found, render high-tech Transmission Error state
  if (!event) {
    return (
      <div className="page-shell event-error-shell">
        <Navbar />

        <main className="event-not-found-main">
          <div className="section-container">
            <div className="error-terminal-card">
              <div className="terminal-topbar">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot blue"></span>
                <span className="terminal-code">SYS_ERR // 0x404_BEACON_LOST</span>
              </div>

              <div className="error-content-body">
                <p className="error-telemetry-tag">TRANSMISSION ERROR</p>
                <h1 className="error-main-title">
                  EVENT <br />
                  <span className="text-sith-red">NOT FOUND</span>
                </h1>
                <p className="error-explanation">
                  The requested mission vector <code>"{eventId}"</code> could not be located in
                  the active AIKYA 2026 tactical registry. The mission may have been reclassified,
                  relocated to another sector, or the transmission packet was corrupted.
                </p>

                <div className="error-actions-group">
                  <Link to="/events" className="btn-primary-glow">
                    ← RETURN TO MISSION REGISTRY
                  </Link>
                  <Link to="/" className="btn-secondary-ghost">
                    HOME BASE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  const isMajor = event.type === "major";
  const formattedNumber = String(event.number || 1).padStart(2, "0");

  return (
    <div className="page-shell event-details-shell">
      <Navbar />

      <main className="event-details-main">
        {/* Navigation Breadcrumb */}
        <section className="event-breadcrumb-strip">
          <div className="section-container">
            <div className="breadcrumb-nav">
              <Link to="/events" className="breadcrumb-back-link">
                ← ALL MISSIONS
              </Link>
              <span className="breadcrumb-sep">//</span>
              <span className="breadcrumb-current">
                MISSION #{formattedNumber} : {event.name.toUpperCase()}
              </span>
            </div>
          </div>
        </section>

        {/* Event Header Dossier */}
        <section className="event-hero-dossier">
          <div className="section-container">
            <div className="dossier-header-grid">
              <div className="dossier-headline-block">
                <div className="event-type-telemetry">
                  <span className={`event-type-badge ${isMajor ? "major-badge" : "minor-badge"}`}>
                    {isMajor ? "PRIMARY MISSION" : "SECONDARY MISSION"}
                  </span>
                  <span className="dossier-sep">//</span>
                  <span className="event-day-badge">DAY 0{event.day}</span>
                  {event.category && (
                    <>
                      <span className="dossier-sep">//</span>
                      <span className="event-domain-name">{event.category}</span>
                    </>
                  )}
                </div>

                <h1 className="event-title-display">
                  {event.name}
                </h1>

                <p className="event-synopsis-lead">
                  {event.description}
                </p>
              </div>

              {/* Number callout */}
              <div className="dossier-number-block">
                <div className="tech-number-frame">
                  <span className="number-label">MISSION CODE</span>
                  <span className="number-value">#{formattedNumber}</span>
                  <span className="number-sub">SECTOR ECE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Telemetry Info Grid */}
        <section className="event-telemetry-section">
          <div className="section-container">
            <div className="telemetry-specs-grid">
              <div className="spec-card">
                <div className="spec-corner tl"></div>
                <div className="spec-corner tr"></div>
                <span className="spec-label">DATE OF OPERATION</span>
                <strong className="spec-value">{event.date}</strong>
                <span className="spec-sub">DAY 0{event.day} SCHEDULE</span>
              </div>

              <div className="spec-card">
                <div className="spec-corner tl"></div>
                <div className="spec-corner tr"></div>
                <span className="spec-label">OPERATIONAL WINDOW</span>
                <strong className="spec-value">{event.time}</strong>
                <span className="spec-sub">REPORT 15M PRIOR</span>
              </div>

              <div className="spec-card">
                <div className="spec-corner tl"></div>
                <div className="spec-corner tr"></div>
                <span className="spec-label">MISSION VENUE</span>
                <strong className="spec-value">{event.venue}</strong>
                <span className="spec-sub">CAMPUS SECTOR MAP</span>
              </div>

              <div className="spec-card">
                <div className="spec-corner tl"></div>
                <div className="spec-corner tr"></div>
                <span className="spec-label">SQUAD COMPOSITION</span>
                <strong className="spec-value">{event.teamSize || "1 - 3 Members"}</strong>
                <span className="spec-sub">INTER-COLLEGE ALLOWED</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Brief & Objective */}
        <section className="event-brief-section">
          <div className="section-container">
            <div className="brief-card">
              <div className="brief-tag">
                <span className="tag-pip"></span>
                MISSION BRIEF // TACTICAL OBJECTIVE
              </div>

              <h2 className="brief-heading">
                YOUR OBJECTIVE
              </h2>

              <p className="brief-text">
                {event.objective || event.description}
              </p>

              {event.prizePool && (
                <div className="prize-callout-strip">
                  <div className="prize-icon">🏆</div>
                  <div className="prize-details">
                    <span className="prize-title">ACCOLADES & REWARDS</span>
                    <span className="prize-desc">{event.prizePool}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Rules & Protocols */}
        <section className="event-rules-section">
          <div className="section-container">
            <div className="rules-wrapper">
              <div className="rules-header">
                <div className="rules-tag">// OPERATIONAL DIRECTIVES</div>
                <h2 className="rules-heading">
                  MISSION PROTOCOLS <br />
                  &amp; RULES
                </h2>
                <p className="rules-caption">
                  Adherence to tactical guidelines is mandatory. Violations will result in
                  scoring deductions or immediate abort clearance.
                </p>
              </div>

              <div className="rules-numbered-grid">
                {event.rules && event.rules.length > 0 ? (
                  event.rules.map((rule, index) => (
                    <div key={index} className="rule-box">
                      <div className="rule-num">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="rule-content">
                        <p className="rule-text">{rule}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="rule-box">
                    <div className="rule-num">01</div>
                    <div className="rule-content">
                      <p className="rule-text">Standard technical fest symposium protocols apply. College ID cards are mandatory.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA: Join the Mission */}
        <section className="event-register-section">
          <div className="section-container">
            <div className="event-cta-box">
              <div className="cta-box-left">
                <span className="box-status-tag">STATUS: ENROLLMENT OPEN</span>
                <h2 className="box-cta-title">
                  JOIN THE <br />
                  <span className="gradient-text-sith">MISSION</span>
                </h2>
                <p className="box-cta-lead">
                  Secure your slot for <strong>{event.name}</strong>. Complete operative registration
                  and prepare your equipment.
                </p>
              </div>

              <div className="cta-box-right">
                <Link to="/registration" className="btn-primary-glow btn-large">
                  <span>REGISTER NOW →</span>
                </Link>
                <Link to="/events" className="btn-secondary-ghost">
                  VIEW OTHER MISSIONS
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Back Button */}
        <div className="event-bottom-nav">
          <div className="section-container">
            <Link to="/events" className="bottom-back-link">
              ← BACK TO ALL MISSIONS
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default EventDetails;