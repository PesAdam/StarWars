import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

type SearchBarProps = {
  onSearch: (searchTerm: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const fetchData = () => {
    fetch(`https://swapi.py4e.com/api/planets/?search=${input}`)
      .then((response) => response.json())
      .then((json) => {
        const results = json.results.map((result: any) => ({
          name: result.name,
          climate: result.climate,
          terrain: result.terrain,
          population: result.population
        }));
        onSearch(results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInput(value);
    fetchData();
  };

  return (
    <>
      <div className="searchBar">
        <FaSearch />
        <input
          type="text"
          name="search"
          key="search-bar"
          value={input}
          placeholder={"search planets"}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};