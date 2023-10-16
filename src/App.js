import React from 'react';
import './App.css';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import { useState } from 'react';

function App() {
    const [ events, setEvents ] = useState([]);
  return (
    <div className="App">
        <CitySearch />
        <EventList events={events}></EventList>
    </div>
  );
}

export default App;
