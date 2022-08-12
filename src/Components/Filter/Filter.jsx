import React from "react";

function Filter(props) {

    return (
        <div className="Filters">
            <button className="Left">&larr;</button>
            <div className="FilterButtonContainer">
                <button className="FilterButton"></button> Trails
            </div>
            <div className="FilterButtonContainer">
                <button className="FilterButton"></button> Mountains
            </div>
            <div className="FilterButtonContainer">
                <button className="FilterButton"></button> Trails
            </div>
            <button className="Right">&rarr;</button>
            <button className="FiltersButton">Filters</button>
        </div>
    );
}

export default Filter;


