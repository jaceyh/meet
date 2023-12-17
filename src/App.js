import React from 'react';
import './App.css';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import CityEventsChart from './components/CityEventsChart';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';

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
    const [ warningAlert, setWarningAlert] = useState("");
 
    useEffect(() => {
        let warningText;
        if (navigator.onLine) {
            warningText = ""
        } else {
            warningText = "You are offline.  Note that event data may not be up to date!"
        }
        setWarningAlert(warningText);
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
            {warningAlert.length ? <WarningAlert text={warningAlert}/> : null }
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
         <CityEventsChart 
         allLocations={allLocations} 
         events={events} />
        </div>
        <EventList 
        events={events}></EventList>
    </div>
  );
}

export default App;
