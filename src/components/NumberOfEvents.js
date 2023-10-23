import React from "react";
import { useState } from "react";

const NumberOfEvents = ({ setNumber }) => {
    const [number, setNumber] = useState("");

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setNumber(value);
    };

    return (
        <div id="number-of-events">
            <input
            type="text"
            className="number-of-events"
            placeholder="32"
            value={number}
            onChange={handleInputChanged}
            />
        </div>
    )
   };

export default NumberOfEvents; 