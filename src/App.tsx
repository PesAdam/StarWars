import React, { useState } from "react";
import { SearchBar } from './components/SearchBar';
import { SearchResult, SearchResultProps } from "./components/SearchResult";
import "../src/styles/app.scss";

type AppProps = {};

export const App: React.FC<AppProps> = () => {
  const [searchResults, setSearchResults] = useState<SearchResultProps[]>([]);
  const [expandedResult, setExpandedResult] = useState<number | null>(null);

  const handleSearch = (results: any) => {
    if (results) {
      const planets = results.map((planet: any) => ({
        name: planet.name,
        population: planet.population,
        climate: planet.climate,
        terrain: planet.terrain
      }));
      setSearchResults(planets);
    }
  };

  return (
    <>
      <div className="App">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      
        <div className="heading">
          <h1 className='heading'>STAR WARS</h1>
          <h2>planets</h2>
        </div>

        <SearchBar onSearch={handleSearch} />
        <div className="cards">
          <ul>
            {searchResults.map((result, index) => (
              <SearchResult
                name={result.name} 
                population={result.population} 
                terrain={result.terrain}
                climate={result.climate}
                isExpanded={index === expandedResult}
                onToggleExpand={() => setExpandedResult(index === expandedResult ? null : index)}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
