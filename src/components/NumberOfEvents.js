import React from "react";
import { useState } from "react";

const NumberOfEvents = ({setCurrentNOE, setErrorAlert}) => {

    const handleInputChanged = (event) => {
        const value = event.target.value;
        
        let infoText;
        if (isNaN(value)) {
            infoText = "Please enter a valid number."
            setErrorAlert(infoText);
        } else {
            infoText = ""
            setCurrentNOE(value);
        }
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