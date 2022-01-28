import React, { useState } from 'react';
import Info from './Info';

function Tile({ hog, onHideClick }) {
    const [showInfo, setShowInfo] = useState(false)
    function onTileClick() {
        setShowInfo(!showInfo)
    }

    return <div className="ui card" onClick={onTileClick} >
        <h2 className="header">{hog.name}</h2>
        <div className="image">
            <img src={hog.image} style={{ width: "100%" }}></img>
        </div>
        {showInfo ? <Info hog={hog} /> : false}
        < button class="ui bottom attached button" name={hog.name} onClick={onHideClick}>Hide hog</button>
    </div>;
}

export default Tile;
