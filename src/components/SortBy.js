import React from 'react';

function SortBy({ parameter, sortBy, onSortClick }) {


    const selected = <button classNane="ui button"  name={parameter} onClick={onSortClick} style={{ backgroundColor: "pink" }}>Sorted by {parameter}</button>
    const notSelected = <button classNane="ui button" name={parameter} onClick={onSortClick}>Sort by {parameter}</button>

    return <div>
        {sortBy === parameter ? selected : notSelected}
    </div>;
}

export default SortBy;
