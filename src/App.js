import React from 'react';
import './App.css';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import Event from './components/Event';

import { useState, useEffect } from 'react';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from "./api.js";

const App = ( {setNumber} ) => {
    const [ events, setEvents ] = useState([]);
    const [ currentNOE, setCurrentNOE ] = useState(32);
    const [ allLocations, setAllLocations] = useState([]);
    const [ currentCity, setCurrentCity ] = useState("See all cities");
 
    const fetchData = async () => {
        const allEvents = await getEvents();
        /*const filteredEvents =
          currentCity === "See all cities"
            ? allEvents
            : allEvents.filter((event) => event.location === currentCity);
        setEvents(filteredEvents.slice(0, setNumber));
        setAllLocations(extractLocations(allEvents));*/
        setEvents(allEvents.slice(0, currentNOE));
    }

    useEffect(() => {
        fetchData();
      }, /*[setNumber, currentCity]);*/ []);

  return (
    <div className="App">
        <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity}/> 
        <EventList events={events}></EventList>
        <NumberOfEvents />
    </div>
  );
}

export default App;
