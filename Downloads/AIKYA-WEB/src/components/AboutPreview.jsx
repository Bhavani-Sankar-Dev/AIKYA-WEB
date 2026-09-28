import { Link } from "react-router-dom";

function AboutPreview() {
  return (
    <section className="about-preview-section">
      <div className="pcb-trace-bg"></div>

      <div className="section-container">
        <div className="section-header-tag">
          <span className="tag-bracket">//</span>
          <span className="tag-text">TRANSMISSION 01 : IDENTITY PROTOCOL</span>
        </div>

        <div className="about-preview-grid">
          {/* Left Column: Big Editorial Typography */}
          <div className="about-preview-left">
            <h2 className="preview-heading">
              THE FORCE OF <br />
              <span className="gradient-text-sith">TECHNOLOGY</span>
            </h2>
            <p className="preview-lead">
              AIKYA is the flagship technical symposium presented by the Department
              of Electronics & Communication Engineering. A two-day crucible where
              theoretical silicon meets galactic engineering challenges.
            </p>
            <p className="preview-body">
              Inspired by the grandeur of space exploration and the precision of modern
              microelectronics, AIKYA 2026 convenes the brightest minds across universities
              to compete in circuit forensics, RF signals, robotics, and embedded innovations.
            </p>

            <Link to="/about" className="preview-link-btn">
              <span>EXPLORE FULL DOSSIER</span>
              <span className="link-arrow">→</span>
            </Link>
          </div>

          {/* Right Column: Numbered Highlights with PCB accents */}
          <div className="about-preview-right">
            <div className="preview-card-item">
              <div className="card-item-header">
                <span className="item-number">01</span>
                <span className="item-badge">THE FEST</span>
              </div>
              <h3 className="item-title">Engineering Excellence</h3>
              <p className="item-desc">
                From semiconductor architecture to satellite signal processing, AIKYA
                tests real-world problem-solving under competitive tournament protocols.
              </p>
              <div className="item-circuit-line"></div>
            </div>

            <div className="preview-card-item">
              <div className="card-item-header">
                <span className="item-number">02</span>
                <span className="item-badge theme-gold">2026 THEME</span>
              </div>
              <h3 className="item-title">A Galaxy of Technology</h3>
              <p className="item-desc">
                Venturing beyond routine classroom boundaries into autonomous navigation,
                high-frequency telemetry, cryptographic networks, and frontier hardware.
              </p>
              <div className="item-circuit-line"></div>
            </div>

            <div className="preview-card-item">
              <div className="card-item-header">
                <span className="item-number">03</span>
                <span className="item-badge">WHAT AWAITS</span>
              </div>
              <h3 className="item-title">Compete & Innovate</h3>
              <p className="item-desc">
                14 specialized missions, workshops, technical project expos, and ₹50,000+
                in cash awards, accolades, and direct mentorship opportunities.
              </p>
              <div className="item-circuit-line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;