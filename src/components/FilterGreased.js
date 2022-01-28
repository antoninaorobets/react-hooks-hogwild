import React from 'react';

function FilterGreased({filterByGreased, onFilterClick}) {
    const btnName = filterByGreased? "Show All hogs" : "Show Greased only" 
    
  return <div>
      <button onClick={onFilterClick}>{btnName}</button>
  </div>;
}

export default FilterGreased;
