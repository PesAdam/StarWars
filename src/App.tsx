import React, {useState, useEffect} from 'react';
import { SearchBar } from './components/SearchBar';
import { Card } from './components/Card';
import '../src/styles/app.scss';


function App() {
  
  return (
    <div className="App">
      <div className="heading">
        <h1 className='heading'>STAR WARS</h1>
        <h2>planets</h2>
      </div>
      <SearchBar />
      <Card />
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
}

export default App;
