import React from "react";

export type SearchResultProps = {
  name: string;
  population: string;
  terrain: string;
  climate: string;
  isExpanded: boolean;
  onToggleExpand: () => void;
};

export const SearchResult: React.FC<SearchResultProps> = ({
  name,
  population,
  terrain,
  climate,
  isExpanded,
  onToggleExpand
}) => {
  return (
    <li className={`searchResult ${isExpanded ? 'expanded' : ''}`}>
        <h2 onClick={onToggleExpand}>{name}</h2>
        {isExpanded && (
          <>
            <p>Population: {population}</p>
            <p>Terrain: {terrain}</p>
            <p>Climate: {climate}</p>
          </>
        )}
        <button className="show-more" onClick={onToggleExpand}>
          {isExpanded ? "Show less" : "Show more"}
        </button>
    </li>
  );
};
