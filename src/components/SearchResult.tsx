import React, {useState} from "react";

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
  const [showMore, setShowMore] = useState(false);
  return (
    <li className="searchResult">
        <h2>{name}</h2>
        {showMore && (
          <>
            <p>Population: {population}</p>
            <p>Terrain: {terrain}</p>
            <p>Climate: {climate}</p>
          </>
        )}
        <button className="show-more" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show less" : "Show more"}
        </button>
    </li>

  );
};