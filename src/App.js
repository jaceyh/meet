import React from 'react';
import './App.css';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';

function App() {
  return (
    <div className="App">
        <CitySearch />
        <EventList />
    </div>
  );
}

export default App;
