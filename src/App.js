import React from 'react';
import './App.css';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import { useState } from 'react';
import NumberOfEvents from './components/NumberOfEvents';

function App() {
    const [ events, setEvents ] = useState([]);
    const [ number, setNumber ] = useState(32);

  return (
    <div className="App">
        <CitySearch />
        <EventList events={events}></EventList>
        <NumberOfEvents />
    </div>
  );
}

export default App;
