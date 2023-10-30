import React from "react";
import { useState } from "react";
import App from "../App";

const NumberOfEvents = () => {

    const [ number, setNumber ] = useState(32);

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