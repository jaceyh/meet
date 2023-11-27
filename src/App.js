import React from 'react';
import './App.css';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';

import { useState, useEffect } from 'react';
import { extractLocations, getEvents } from "./api.js";

import './App.css';

const App = () => {
    const [ events, setEvents ] = useState([]);
    const [ currentNOE, setCurrentNOE ] = useState(32);
    const [ allLocations, setAllLocations] = useState([]);
    const [ currentCity, setCurrentCity ] = useState("See all cities");
 
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
        <div className="search-bars">
        <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity}/> 
        <NumberOfEvents setCurrentNOE={setCurrentNOE}/>
        </div>
        <EventList events={events}></EventList>
    </div>
  );
}

export default App;
