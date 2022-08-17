import React from "react";

function TrailCard(props) {
  return (
    <div className="ExploreItem">
      <div id="ItemBar">{props.LocationName}</div>
    </div>
  );
}

export default TrailCard;
