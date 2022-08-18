import React from "react";
import "./TrailCard.css";
function TrailCard(props) {
  return (
    <div className="ExploreItem">
      <div id="ItemBar">{props.LocationName}</div>
      <img className="photo" src={props.img} />
      <br />
      <a href="">Details</a>
    </div>
  );
}

export default TrailCard;
