import React from "react";

export type SearchResultProps = {
  name: string;
  population: string;
  terrain: string;
  climate: string;
};

export const SearchResult: React.FC<SearchResultProps> = ({
  name,
  population,
  terrain,
  climate
}) => {
  return (
    <li className="searchResult">
        <h2>{name}</h2>
        <p>Population: {population}</p>
        <p>Terrain: {terrain}</p>
        <p>Climate: {climate}</p>
    </li>

  );
};