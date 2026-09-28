function Sponsors() {
  const sponsorTiers = [
    {
      id: "title",
      category: "TITLE SPONSOR",
      code: "TIER-01 // ALLIANCE PATRON",
      name: "GALACTIC SEMICONDUCTOR LABS",
      tagline: "Advancing Silicon Frontier Research",
      tierClass: "tier-title",
      accent: "#E5092F",
      featured: true,
    },
    {
      id: "tech",
      category: "TECHNOLOGY PARTNER",
      code: "TIER-02 // CORE INFRASTRUCTURE",
      name: "NEXUS EMBEDDED SYSTEMS",
      tagline: "Next-Gen RISC-V & Edge AI Compute",
      tierClass: "tier-tech",
      accent: "#28A9FF",
      featured: false,
    },
    {
      id: "innovation",
      category: "INNOVATION PARTNER",
      code: "TIER-03 // VENTURE & INCUBATION",
      name: "ORBITAL DYNAMICS CORP",
      tagline: "Aerospace Avionics & Satellite Comms",
      tierClass: "tier-innovation",
      accent: "#F2C14E",
      featured: false,
    },
    {
      id: "event",
      category: "EVENT PARTNER",
      code: "TIER-04 // PROTOCOL SUPPORTER",
      name: "SYNAPSE ROBOTICS ALLIANCE",
      tagline: "Autonomous Mechatronics & Sensors",
      tierClass: "tier-event",
      accent: "#9CA3AF",
      featured: false,
    },
  ];

  return (
    <section className="sponsors-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-head-block text-center">
          <div className="section-telemetry-tag centered">
            <span className="tag-pip"></span>
            INDUSTRY PATRONS & COLLABORATORS
          </div>
          <h2 className="section-large-title">
            MISSION <span className="gradient-text-sith">ALLIANCES</span>
          </h2>
          <p className="section-lead-desc centered">
            Supported by premier engineering organizations shaping the forefront of
            microelectronics, communications, and computational systems.
          </p>
        </div>

        {/* Sponsor Cards Grid */}
        <div className="sponsors-grid">
          {sponsorTiers.map((tier) => (
            <div
              key={tier.id}
              className={`sponsor-card ${tier.tierClass} ${
                tier.featured ? "is-featured-sponsor" : ""
              }`}
            >
              {/* Corner brackets */}
              <div className="sponsor-bracket tl"></div>
              <div className="sponsor-bracket tr"></div>
              <div className="sponsor-bracket bl"></div>
              <div className="sponsor-bracket br"></div>

              <div className="sponsor-card-top">
                <span className="sponsor-category-badge">{tier.category}</span>
                <span className="sponsor-code">{tier.code}</span>
              </div>

              {/* High-tech Emblem / Logo Box */}
              <div className="sponsor-logo-box">
                <div className="sponsor-pcb-backdrop"></div>
                <div className="sponsor-emblem-graphic">
                  <div className="emblem-hex">
                    <span className="emblem-core-dot"></span>
                    <span className="emblem-pulse-ring"></span>
                  </div>
                </div>
                <h3 className="sponsor-brand-name">{tier.name}</h3>
                <p className="sponsor-tagline">{tier.tagline}</p>
              </div>

              <div className="sponsor-card-footer">
                <span className="sponsor-verification">
                  <span className="verify-dot"></span>
                  VERIFIED PATRON PROTOCOL
                </span>
                <span className="sponsor-status">OFFICIAL 2026</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call for Sponsorship */}
        <div className="sponsorship-inquiry-box">
          <div className="inquiry-text">
            <strong>INTERESTED IN PARTNERING FOR AIKYA 2026?</strong>
            <p>Connect with the ECE faculty conveners and sponsorship leads.</p>
          </div>
          <a
            href="mailto:ietevvitu@vvit.net?subject=AIKYA%202026%20Sponsorship%20Inquiry"
            className="inquiry-btn"
          >
            REQUEST PARTNERSHIP PROSPECTUS →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;