
import { useEffect, useRef, useState } from "react";
import basketBallImage from "../assets/Basket Ball Challenge poster.jpg.jpeg";
import ballonImage from "../assets/5.png"
import MagenticBattle from "../assets/6.png"
import cupStackingImage from "../assets/cup-stacking.png";
import marbleMazeImage from "../assets/Marble Maze landscape event poster.jpg.jpeg";
// import marbleMatchImage from "../assets/marble-match.png";
import memCupsImage from "../assets/mem-cups.png";
import numberSequenceImage from "../assets/NUMBER IN SEQUENCE landscape poster.jpg.jpeg";
import pennyGameImage from "../assets/penny-game.png";
import slingBattleImage from "../assets/SLING BATTLE landscape poster.jpg.jpeg";
import ultimateBalanceImage from "../assets/Ultimate Balance Game landscape poster.jpg.jpeg";

const spotEvents = [
    { id: "blow-ballon", name: "Blow The Balloon",  image: ballonImage },
    { id: "magnetic-battle", name: "Magnetic Battke",  image:  MagenticBattle},
    { id: "marble-maze", name: "Marble Maze",  image: marbleMazeImage },
    // { id: "marble-match", name: "Marble Match",  image: marbleMatchImage },
    { id: "mem-cups", name: "Mem Cups",  image: memCupsImage },
    { id: "number-in-sequence", name: "Number in Sequence",  image: numberSequenceImage },
    { id: "pennys-game", name: "Penny's Game",  image: pennyGameImage },
    { id: "sling-battle", name: "Sling Battle",  image: slingBattleImage },
    { id: "ultimate-balance", name: "Ultimate Balance",  image: ultimateBalanceImage },
    { id: "basketball-challenge", name: "Basketball Challenge",  image: basketBallImage },
    { id: "cup-stacking", name: "Cup Stacking",  image: cupStackingImage },
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
                <span className="spot-event-card-meta"></span>
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