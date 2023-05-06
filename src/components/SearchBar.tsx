import React, { useState, useEffect } from "react";

interface SearchResult {
  id: number;
  name: string;
  description: string;
}

interface SearchBarProps {
  onSearch: (searchResults: SearchResult[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setIsLoading(true);
      const response = await fetch(`https://swapi.py4e.com/api/planets/?search=${debouncedSearchTerm}`);
      const searchResults = await response.json();
      setIsLoading(false);
      onSearch(searchResults);
    };

    if (debouncedSearchTerm) {
      fetchSearchResults();
    }
  }, [debouncedSearchTerm, onSearch]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default SearchBar;