import logo1 from '../assets/phoenix.jpeg'
import logo2 from '../assets/engineering-scoops.png'
import logo3 from '../assets/student-tribe.jpeg'

function Sponsors() {
  const sponsorTiers = [
    {
      id: "title",
      category: "TITLE SPONSOR",
      code: "TITLE SPONSOR",
      name: "PHOENIX OVERSEAS",
      tagline: "edu and consultancy",
      logo: logo1,
      monogram: "PO",
      tierClass: "tier-title",
      accent: "#E5092F",
      featured: true,
    },
    {
      id: "tech",
      category: "CO-SPONSOR",
      code:"CO-SPONSOR",
      name: "ENGINEERING SCCOPS",
      tagline: "engineering scoops",
      logo: logo2,
      monogram: "ES",
      tierClass: "tier-tech",
      accent: "#28A9FF",
      featured: false,
    },
    {
      id: "innovation",
      category: "OUTREACH-PARTNER",
      code: "OUTREACH PARTNER",
      name: "STUDENT TRIBE",
      tagline: "student tribe",
      logo: logo3,
      monogram: "ST",
      tierClass: "tier-innovation",
      accent: "#F2C14E",
      featured: false,
    }
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
              style={{ "--sponsor-accent": tier.accent }}
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

              <div className="sponsor-logo-box">
                <div className={`sponsor-logo-stage ${tier.logo ? "has-logo" : "is-placeholder"}`}>
                  {tier.logo ? (
                    <img
                      className="sponsor-logo-image"
                      src={tier.logo}
                      alt={`${tier.name} logo`}
                      loading="lazy"
                    />
                  ) : (
                    <span className="sponsor-logo-monogram" aria-hidden="true">
                      {tier.monogram}
                    </span>
                  )}
                </div>
                <h3 className="sponsor-brand-name">{tier.name}</h3>
                {tier.tagline && <p className="sponsor-tagline">{tier.tagline}</p>}
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

        
      </div>
    </section>
  );
}

export default Sponsors;