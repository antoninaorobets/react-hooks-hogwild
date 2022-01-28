import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import TileList from "./TileList";
import FilterGreased from "./FilterGreased";
import hogs from "../porkers_data";
import SortBy from "./SortBy";

function App() {
	const [hogsToDisplay, setHogsToDisplay] = useState(hogs)
	const [filterByGreased, setFilterByGreased] = useState(false)
	const [sortBy,setSortBy] = useState("")
//	const [hideHoh, setHideHog] = useState("")

	function onFilterClick(){
		setFilterByGreased(()=>!filterByGreased)

		const filtered = hogs.filter((hog)=>{return hog.greased === true})
		filterByGreased ?  setHogsToDisplay(hogs) : setHogsToDisplay(filtered)
	}

	function onSortClick(event) {
		const parameter = event.target.name
		setSortBy(parameter)
		switch (parameter) {
			case "name": {
				setHogsToDisplay(sortByName())
				break;
			}
			case "weight": {
				setHogsToDisplay(sortByWeight())
				break;
			}
		}
	}

function sortByName() {
	return  hogsToDisplay.sort((a, b) => a.name.localeCompare(b.name))
}
function sortByWeight() {
	return hogsToDisplay.sort((a, b) =>  Number(a.weight) - Number(b.weight))
}
 function onHideClick(event){
	const filtered = hogsToDisplay.filter((hog)=> hog.name !== event.target.name)
	setHogsToDisplay(filtered)
 }
	
	return (
		<div className="App">
			<Nav />
			<FilterGreased filterByGreased={filterByGreased} onFilterClick={onFilterClick} />
			<SortBy parameter={"name"} onSortClick={onSortClick} sortBy={sortBy}/>
			<SortBy parameter={"weight"} onSortClick={onSortClick} sortBy={sortBy}/>
			<TileList hogs={hogsToDisplay} onHideClick={onHideClick} />
		</div>
	);
}

export default App;
