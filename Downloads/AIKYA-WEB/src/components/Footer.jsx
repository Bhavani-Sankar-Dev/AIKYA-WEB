import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-mission-control">
      {/* Top Laser Accent Line */}
      <div className="footer-accent-barrier">
        <div className="barrier-segment-blue"></div>
        <div className="barrier-core-node"></div>
        <div className="barrier-segment-red"></div>
      </div>

      <div className="footer-container">
        <div className="footer-top-grid">
          {/* Imperial Brand Terminal */}
          <div className="footer-terminal-brand">
            <div className="terminal-header">
              <span className="terminal-dot"></span>
              <span className="terminal-title">TERMINAL // ECE.SYS.MAIN</span>
            </div>

            <div className="brand-lockup">
              <h2 className="footer-title">AIKYA</h2>
              <span className="footer-year">2026</span>
            </div>

            <p className="footer-subtitle">ECE TECHNICAL FEST</p>
            <p className="footer-tagline">A GALAXY OF TECHNOLOGY AWAITS</p>

            <div className="footer-telemetry-badge">
              <span>STATUS: TRANSMISSION SECURE</span>
              <span className="badge-sep">&bull;</span>
              <span>SECTOR: 07-ECE</span>
            </div>
          </div>

          {/* Column 1: Navigation */}
          <div className="footer-column">
            <div className="column-heading">
              <span className="heading-bracket">&gt;</span> NAVIGATION PROTOCOL
            </div>
            <ul className="footer-nav-list">
              <li>
                <Link to="/" className="footer-link">
                  01 // HOME BASE
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  02 // ABOUT DOSSIER
                </Link>
              </li>
              <li>
                <Link to="/events" className="footer-link">
                  03 // MISSION REGISTRY
                </Link>
              </li>
              <li>
                <Link to="/registration" className="footer-link">
                  04 // ACCESS CLEARANCE
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Contact & Department */}
          <div className="footer-column">
            <div className="column-heading">
              <span className="heading-bracket">&gt;</span> COMMAND OUTPOST
            </div>
            <div className="footer-contact-details">
              <p className="contact-dept">Department of Electronics & Communication Engineering</p>
              <p className="contact-inst">Vasireddy Venkatadri Institute of Technology (VVIT)</p>
              <p className="contact-loc">Nambur, Guntur, Andhra Pradesh 522508</p>

              <div className="contact-comm-link">
                <span className="comm-label">DIRECT TELEMETRY:</span>
                <a href="mailto:ietevvitu@vvit.net" className="comm-email">
                  ietevvitu@vvit.net
                </a>
              </div>
            </div>

            <div className="footer-map-panel">
              <div className="column-heading map-heading">
                <span className="heading-bracket">&gt;</span> LIVE MAP
              </div>
              <div className="map-embed-frame">
                <iframe
                  title="VVIT campus location"
                  src="https://www.google.com/maps?q=Vasireddy+Venkatadri+Institute+of+Technology,+Nambur,+Guntur,+Andhra+Pradesh+522508&z=14&output=embed"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <a
                href="https://maps.google.com/?q=Vasireddy+Venkatadri+Institute+of+Technology,+Nambur,+Guntur,+Andhra+Pradesh+522508"
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                OPEN DIRECTIONS
              </a>
            </div>
          </div>

          {/* Column 3: Transmission Channels */}
          <div className="footer-column">
            <div className="column-heading">
              <span className="heading-bracket">&gt;</span> SECURE FREQUENCIES
            </div>
            <div className="social-links-grid">
              <a
                href="https://www.instagram.com/iete_vvitu/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="IETE VVIT Instagram"
              >
                <span className="social-tag">IG</span>
                <span className="social-name">INSTAGRAM</span>
                <span className="social-arrow">↗</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn Transmission"
              >
                <span className="social-tag">IN</span>
                <span className="social-name">LINKEDIN</span>
                <span className="social-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="copyright-info">
            &copy; 2026 AIKYA. ALL RIGHTS RESERVED. CONCEIVED & EXECUTED BY DEPARTMENT OF ECE.
          </div>
          <div className="mission-coordinates">
            <span>GRID: LAT 16.347° N</span>
            <span className="coords-sep">//</span>
            <span>LONG 80.528° E</span>
            <span className="coords-sep">//</span>
            <span className="coords-rev">REV 2026.04</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;