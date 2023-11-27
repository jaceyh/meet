import React from "react";
import { useState } from "react";

const NumberOfEvents = ({setCurrentNOE}) => {

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setCurrentNOE(value);
    };

    return (
        <div id="number-of-events">
            <input
            type="text"
            className="number-of-events"
            defaultValue="32"
            onChange={handleInputChanged}
            />
        </div>
    )
};

export default NumberOfEvents; 