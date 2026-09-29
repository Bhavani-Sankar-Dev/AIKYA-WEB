
import { useEffect, useRef, useState } from "react";
import codeForceImage from "../assets/1.png";
import holocronImage from "../assets/2.png";
import krennicImage from "../assets/3.png";
import circuitForgeImage from "../assets/4.png";
import canvaImage from "../assets/canva.png";
import binaryImage from "../assets/binary.png";
import chessImage from "../assets/chess.png";
import escapeRoomImage from "../assets/escape-room.png";
import puzzleImage from "../assets/puzzle.png";
import rebelsImage from "../assets/rebels.png";

const spotEvents = [
    { id: "krennic-encryption", name: "Krennic Encryption", day: 1, image: krennicImage },
    { id: "code-force-awaken", name: "Code Force Awaken", day: 1, image: codeForceImage },
    { id: "canvas-clash", name: "Canvas Clash", day: 1, image: canvaImage },
    { id: "puzzle-paradox", name: "Puzzle Paradox", day: 1, image: puzzleImage },
    { id: "rise-of-rebels", name: "Rise of Rebels", day: 1, image: rebelsImage },
    { id: "binary-breaker", name: "Binary Breaker", day: 1, image: binaryImage },
    { id: "holocron-hunt", name: "Holocron Hunt", day: 2, image: holocronImage },
    { id: "galactic-circuit-forge", name: "Galactic Circuit Forge", day: 2, image: circuitForgeImage },
    { id: "dice-mate", name: "Dice Mate", day: 2, image: chessImage },
    { id: "tech-treasure", name: "Tech Treasure", day: 2, image: escapeRoomImage },
];

function SpotEvents() {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const closeButtonRef = useRef(null);
    const triggerButtonRef = useRef(null);

    useEffect(() => {
        if (!selectedEvent) return undefined;

        const previousOverflow = document.body.style.overflow;
        const handleKeyDown = (event) => {
            if (event.key === "Escape") setSelectedEvent(null);
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);
        closeButtonRef.current?.focus();

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
            triggerButtonRef.current?.focus();
        };
    }, [selectedEvent]);

    const renderEventCard = (event, isDuplicate = false) => (
        <button
            key={`${isDuplicate ? "duplicate-" : ""}${event.id}`}
            type="button"
            className="spot-event-card"
            aria-label={`View poster for ${event.name}`}
            tabIndex={isDuplicate ? -1 : undefined}
            onClick={(clickEvent) => {
                triggerButtonRef.current = clickEvent.currentTarget;
                setSelectedEvent(event);
            }}
        >
            <img src={event.image} alt="" loading="lazy" />
            <span className="spot-event-card-caption">
                <span className="spot-event-card-meta">
                    <span>DAY 0{event.day}</span>
                    <span>SPOT EVENT</span>
                </span>
                <span className="spot-event-card-title">{event.name}</span>
            </span>
        </button>
    );

    return (
        <section className="spot-events-section" aria-labelledby="spot-events-title">
            <div className="section-container">
                <div className="section-head-block text-center">
                    <div className="section-telemetry-tag centered">
                        <span className="tag-pip"></span>
                        EVENT SIGNALS // LIVE FEED
                    </div>
                    <h2 className="section-large-title" id="spot-events-title">
                        SPOT <span className="gradient-text-sith">EVENTS</span>
                    </h2>
                    <p className="section-lead-desc centered">
                        Explore the event lineup.
                    </p>
                </div>
            </div>

            <div className="spot-events-marquee" role="region" aria-label="Spot events">
                <div className="spot-events-track">
                    <div className="spot-events-track-group">
                        {spotEvents.map((event) => renderEventCard(event))}
                    </div>
                    <div className="spot-events-track-group" aria-hidden="true">
                        {spotEvents.map((event) => renderEventCard(event, true))}
                    </div>
                </div>
            </div>

            {selectedEvent && (
                <div
                    className="spot-poster-backdrop"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) setSelectedEvent(null);
                    }}
                >
                    <div
                        className="spot-poster-dialog"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="spot-poster-title"
                    >
                        <div className="spot-poster-header">
                            <div>
                                <span className="spot-poster-kicker">EVENT POSTER</span>
                                <h3 id="spot-poster-title">{selectedEvent.name}</h3>
                            </div>
                            <button
                                ref={closeButtonRef}
                                type="button"
                                className="spot-poster-close"
                                aria-label="Close poster"
                                onClick={() => setSelectedEvent(null)}
                            >
                                ×
                            </button>
                        </div>
                        <img
                            className="spot-poster-image"
                            src={selectedEvent.image}
                            alt={`${selectedEvent.name} event poster`}
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

export default SpotEvents;