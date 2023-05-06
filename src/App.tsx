import React, {useState, useEffect} from 'react';
import SearchBar from './components/SearchBar';
import '../src/styles/app.scss';


function App() {
  
  const handleSearch = (searchTerm: string) => {
    console.log(searchTerm);
    // vykonajte vyhladavanie s pouzitim searchTerm
  };
  
  return (
    <div className="App">
      <div className="heading">
        <h1 className='heading'>STAR WARS</h1>
        <h2>planets</h2>
      </div>
      <SearchBar onSearch={handleSearch} />
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
}

export default App;
