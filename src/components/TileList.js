import React from 'react';
import Tile from './Tile';

function TileList({hogs,onHideClick}) {

    const hogsList = hogs.map((hog)=>{return <Tile key={hog.name} onHideClick={onHideClick} hog={hog}/>})
  return <div className="ui link cards">
      {hogsList}
  </div>;
}

export default TileList;
