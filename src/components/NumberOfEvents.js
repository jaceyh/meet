import React from "react";
import { useState } from "react";

const NumberOfEvents = ({ setNumber }) => {

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setNumber(value);
    };

    return (
        <div id="number-of-events">
            <input
            type="text"
            className="number-of-events"
            //placeholder="32"
            defaultValue="32"
            onChange={handleInputChanged}
            />
        </div>
    )
};

export default NumberOfEvents; 