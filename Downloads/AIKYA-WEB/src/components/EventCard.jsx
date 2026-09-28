import { Link } from "react-router-dom";

function EventCard({ event, featured = false }) {
  const isMajor = event.type === "major";
  const formattedNumber = String(event.number || 1).padStart(2, "0");

  return (
    <article
      className={`event-card ${isMajor ? "is-major" : "is-minor"} ${
        featured ? "is-featured" : ""
      }`}
    >
      {/* Corner HUD accents */}
      <div className="card-bracket-tl"></div>
      <div className="card-bracket-tr"></div>
      <div className="card-bracket-bl"></div>
      <div className="card-bracket-br"></div>

      {/* Top Header Strip */}
      <div className="event-card-top">
        <div className="event-number-tag">
          <span className="num-prefix">#</span>
          <span className="num-digits">{formattedNumber}</span>
        </div>

        <div className="card-badges-group">
          <span className={`badge-day ${event.day === 1 ? "day-1" : "day-2"}`}>
            DAY 0{event.day}
          </span>
          <span className={`badge-type ${isMajor ? "badge-major" : "badge-minor"}`}>
            {isMajor ? "PRIMARY MISSION" : "SECONDARY"}
          </span>
        </div>
      </div>

      {/* Domain Category */}
      {event.category && (
        <div className="event-domain-tag">
          <span className="domain-pip"></span>
          <span>{event.category}</span>
        </div>
      )}

      {/* Main Content */}
      <div className="event-card-content">
        <h3 className="event-card-title">{event.name}</h3>
        <p className="event-card-desc">{event.description}</p>
      </div>

      {/* Meta Specs */}
      <div className="event-card-meta">
        <div className="meta-row">
          <span className="meta-icon">📍</span>
          <span className="meta-text">{event.venue}</span>
        </div>
        <div className="meta-row">
          <span className="meta-icon">⏱</span>
          <span className="meta-text">{event.time}</span>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="event-card-bottom">
        <Link
          to={`/events/${event.id}`}
          className="event-card-action-link"
          aria-label={`View mission details for ${event.name}`}
        >
          <span className="action-txt">VIEW MISSION</span>
          <span className="action-arrow">→</span>
        </Link>
      </div>

      {/* Subtle bottom scan glow line */}
      <div className="card-scan-line"></div>
    </article>
  );
}

export default EventCard;