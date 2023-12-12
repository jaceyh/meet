import React from 'react';
import './App.css';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { InfoAlert, ErrorAlert } from './components/Alert';

import { useState, useEffect } from 'react';
import { extractLocations, getEvents } from "./api.js";

import './App.css';

const App = () => {
    const [ events, setEvents ] = useState([]);
    const [ currentNOE, setCurrentNOE ] = useState(32);
    const [ allLocations, setAllLocations] = useState([]);
    const [ currentCity, setCurrentCity ] = useState("See all cities");
    const [ infoAlert, setInfoAlert] = useState("");
    const [ errorAlert, setErrorAlert] = useState("");
 
    useEffect(() => {
        fetchData();
      }, [currentCity, currentNOE]);
    
    const fetchData = async () => {
        const allEvents = await getEvents();
        const filteredEvents = currentCity === "See all cities" ? 
          allEvents : 
          allEvents.filter(event => event.location === currentCity);
        setEvents(filteredEvents.slice(0, currentNOE));
        setAllLocations(extractLocations(allEvents));
    }


  return (
    <div className="App">
        <div className="alerts-container">
            {infoAlert.length ? <InfoAlert text={infoAlert}/> : null }
            {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null }
        </div>
        <div className="search-bars">
        <CitySearch 
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}
        /> 
        <NumberOfEvents 
        setCurrentNOE={setCurrentNOE}
        setErrorAlert={setErrorAlert}
        />
        </div>
        <EventList events={events}></EventList>
    </div>
  );
}

export default App;
