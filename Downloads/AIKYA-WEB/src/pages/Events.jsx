import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventCard from "../components/EventCard";
import events from "../data/events";

function Events() {
  const [selectedDay, setSelectedDay] = useState("all");

  const filteredEvents =
    selectedDay === "all"
      ? events
      : events.filter((event) => String(event.day) === selectedDay);

  const majorEvents = filteredEvents.filter((event) => event.type === "major");
  const minorEvents = filteredEvents.filter((event) => event.type === "minor");

  const countTotal = events.length;
  const countDay1 = events.filter((e) => e.day === 1).length;
  const countDay2 = events.filter((e) => e.day === 2).length;

  return (
    <div className="page-shell events-page-shell">
      <Navbar />

      <main className="events-page-main">
        {/* Missions Command Header */}
        <section className="events-command-header">
          <div className="section-container">
            <div className="command-header-content">
              <div className="section-telemetry-tag">
                <span className="tag-pip"></span>
                MISSION CONTROL // TACTICAL REGISTRY
              </div>

              <h1 className="events-main-title">
                CHOOSE YOUR <br />
                <span className="gradient-text-sith">MISSION</span>
              </h1>

              <p className="events-lead-subtitle">
                14 high-caliber technical operations across 2 days. From cryptographic
                signal relay to autonomous robotics and deep silicon diagnostics.
              </p>

              {/* Status HUD Indicators */}
              <div className="events-quick-stats">
                <div className="quick-stat-badge">
                  <span className="stat-code">TOTAL REGISTRY:</span>
                  <span className="stat-num">{countTotal} MISSIONS</span>
                </div>
                <div className="quick-stat-badge">
                  <span className="stat-code">PRIMARY TRIALS:</span>
                  <span className="stat-num">4 MAJOR</span>
                </div>
                <div className="quick-stat-badge">
                  <span className="stat-code">SECONDARY SULPHUR:</span>
                  <span className="stat-num">10 MINOR</span>
                </div>
              </div>
            </div>

            {/* Day Filter Bar */}
            <div className="events-filter-bar">
              <div className="filter-label">FILTER SECTOR:</div>
              <div className="filter-buttons-cluster">
                <button
                  type="button"
                  className={`filter-btn ${selectedDay === "all" ? "active" : ""}`}
                  onClick={() => setSelectedDay("all")}
                >
                  <span className="btn-filter-code">ALL</span>
                  <span className="btn-filter-name">ALL MISSIONS</span>
                  <span className="btn-filter-count">({countTotal})</span>
                </button>

                <button
                  type="button"
                  className={`filter-btn ${selectedDay === "1" ? "active" : ""}`}
                  onClick={() => setSelectedDay("1")}
                >
                  <span className="btn-filter-code">D1</span>
                  <span className="btn-filter-name">DAY 01</span>
                  <span className="btn-filter-count">({countDay1})</span>
                </button>

                <button
                  type="button"
                  className={`filter-btn ${selectedDay === "2" ? "active" : ""}`}
                  onClick={() => setSelectedDay("2")}
                >
                  <span className="btn-filter-code">D2</span>
                  <span className="btn-filter-name">DAY 02</span>
                  <span className="btn-filter-count">({countDay2})</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Major Missions Section (Prominent, High Visual Hierarchy) */}
        {majorEvents.length > 0 && (
          <section className="missions-group-section major-group">
            <div className="section-container">
              <div className="group-header">
                <div className="group-tag sith-red-tag">
                  <span className="tag-pulse"></span>
                  FLAGSHIP PROTOCOLS // TIER-1
                </div>
                <h2 className="group-title">
                  PRIMARY <span className="text-sith-red">MISSIONS</span>
                </h2>
                <p className="group-caption">
                  High-profile tournaments with multi-round knockout stages, trophy awards, and major cash pools.
                </p>
              </div>

              <div className="major-missions-grid">
                {majorEvents.map((event) => (
                  <EventCard key={event.id} event={event} featured={true} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Minor Missions Section */}
        {minorEvents.length > 0 && (
          <section className="missions-group-section minor-group">
            <div className="section-container">
              <div className="group-header">
                <div className="group-tag holo-blue-tag">
                  <span className="tag-dot-blue"></span>
                  SPECIALIZED OPERATIONS // TIER-2
                </div>
                <h2 className="group-title">
                  SECONDARY <span className="text-holo-blue">MISSIONS</span>
                </h2>
                <p className="group-caption">
                  Fast-paced engineering tests, logic puzzles, circuit synthesis, and precision diagnostics.
                </p>
              </div>

              <div className="minor-missions-grid">
                {minorEvents.map((event) => (
                  <EventCard key={event.id} event={event} featured={false} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Events;