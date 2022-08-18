import React from "react";
import "./Filter.css";

function Filter(props) {
  return (
    <div className="Filters">
      <button className="Left">&larr;</button>
      <div className="FilterButtonContainer">
        <img src="../../Biking.svg" alt="" />
        Biking
      </div>
      <div className="FilterButtonContainer">
        <img src="../../Forest.svg" alt="" />
        Forest
      </div>
      <div className="FilterButtonContainer">
        <img src="../../Climbing.svg" alt="" />
        Climbing
      </div>
      <div className="FilterButtonContainer">
        <img src="../../Kayaking.svg" alt="" />
        Kayaking
      </div>
      <div className="FilterButtonContainer">
        <img src="../../Mountain.svg" alt="" />
        Mountain
      </div>
      <div className="FilterButtonContainer">
        <img src="../../Running.svg" alt="" />
        Running
      </div>
      <div className="FilterButtonContainer">
        <img src="../../Skiing.svg" alt="" />
        Skiing
      </div>
      <div className="FilterButtonContainer">
        <img src="../../Waves.svg" alt="" />
        Waves
      </div>
      <div className="FilterButtonContainer">
        <img src="../../Trekking.svg" alt="" />
        Trekking
      </div>
      <div className="FilterButtonContainer">
        <img src="../../Wakeboarding.svg" alt="" />
        Wakeboard
      </div>
      <button className="Right">&rarr;</button>
      <button className="FiltersButton">Filters</button>
    </div>
  );
}

export default Filter;
