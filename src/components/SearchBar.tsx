// SearchBar.tsx
import React from 'react';


export const SearchBar: React.FC = (keyWord:string, onChange) => {
  return(
    <>
        <div className="searchBar">
            <input 
                type='text' 
                name='search' 
                key="search-bar"
                // value={keyWord}
                placeholder={'search planets'}
                // onChange={(e) => onChange(e.target.value)}
            />
        </div>
    </>
  )
};