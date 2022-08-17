import React from "react";

function TrailCard(props) {
  return (
    <div className="ExploreItem">
      <div id="ItemBar">
        {props.LocationName}
        <button className="ButtonEdit">Edit</button>
        <button className="ButtonDelete">Delete</button>
      </div>
    </div>
  );
}

export default TrailCard;
