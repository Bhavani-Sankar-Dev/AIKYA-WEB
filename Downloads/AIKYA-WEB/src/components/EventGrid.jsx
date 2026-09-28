import { Link } from "react-router-dom";
import EventCard from "./EventCard";
import events from "../data/events";

function EventGrid() {
  // Highlight the 4 Major Events as primary flagship missions on the homepage
  const majorEvents = events.filter((e) => e.type === "major");

  return (
    <section className="featured-missions-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-head-block">
          <div className="section-telemetry-tag">
            <span className="tag-pip"></span>
            AIKYA 2026 // FLAGSHIP MISSIONS
          </div>
          <div className="section-title-flex">
            <div>
              <h2 className="section-large-title">
                PRIMARY <br />
                <span className="gradient-text-sith">CHALLENGES</span>
              </h2>
              <p className="section-lead-desc">
                Four pinnacle tournaments demanding deep mastery in optoelectronics,
                RF signal decoding, FPGA architecture, and hardware innovation.
              </p>
            </div>

            <Link to="/events" className="view-all-missions-cta">
              <span>EXPLORE ALL 14 MISSIONS</span>
              <span className="cta-arrow-icon">→</span>
            </Link>
          </div>
        </div>

        {/* Flagship Missions Grid */}
        <div className="featured-events-grid">
          {majorEvents.map((event) => (
            <EventCard key={event.id} event={event} featured={true} />
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="missions-banner-card">
          <div className="banner-left">
            <span className="banner-code">MISSION DIRECTORY // 10 SECONDARY TRIALS</span>
            <h3 className="banner-title">10 Additional Technical Operations Await</h3>
            <p className="banner-desc">
              From Robo Race arenas and rapid Breadboard sprints to Firmware Code Wars and Debug Duels.
            </p>
          </div>
          <div className="banner-right">
            <Link to="/events" className="banner-btn">
              VIEW MISSION BOARD →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventGrid;