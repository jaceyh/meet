import { useState } from "react";

const Event = ( {event} ) => {
    const [ showDetails, setShowDetails ] = useState(false);
    return (
        <li id="event" className="event">
            <h1>{event.summary}</h1>
            <p>{event.created}</p>
            <p>{event.location}</p>
            <button
                className="show-details-btn"
                onClick={() => {
                    setShowDetails(!showDetails);
                }}
                >
                    {showDetails ? 'Hide Details' : 'Show Details'}
                </button>
                {showDetails ? (
                    <div className="details">
                        <h2>Event Details</h2>
                        <p>Description: {event.description}</p>
                        <p>Status: {event.status}</p>
                    </div>
                ) : null}
        </li>
    );
};
  
export default Event;