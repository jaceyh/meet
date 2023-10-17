import { useState } from "react";

const NumberOfEvents = ({ number }) => {
    const [query, setQuery] = useState("");

    const handleInputChanged = (event) => {
        const value = event.target.value;
        const defaultValue = 32;
        const filteredNumbers = allNumbers ? allNumbers.filter((number) => {
          return number.indexOf(value) > -1;
        }) : [];
    
        setQuery(value);
        setSuggestions(filteredNumbers);
    };

    const handleItemClicked = (event) => {
        const value = event.target.textContent;
        setQuery(value);
        setShowSuggestions(false); // to hide the list
    };

    return (
        <div id="number-of-events">
            <input
            type="text"
            className="number-of-events"
            placeholder="32"
            value={query}
            onFocus={() => setShowDefault(true)}
            onChange={handleInputChanged}
            />
            {showDefault ? 
                <ul className="suggestions">
                    {suggestions.map((suggestion) => {
                        return <li onClick={handleItemClicked} key={suggestion}>{suggestion}</li>
                    })}
                    <li onClick={handleItemClicked} key='See all cities'>
                        <b>See all cities</b>
                    </li>
                </ul> 
            : null
            }
        </div>
    )
   }
   
   export default CitySearch; 