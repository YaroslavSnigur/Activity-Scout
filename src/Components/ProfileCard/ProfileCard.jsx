import React from "react";
import { Link } from "react-router-dom";

import "./ProfileCard.css";

function ProfileCard(props) {
  return (
    <div id="profile-card">
      {props.LocationName}
      {props.Address}
      {props.Fee}
      {props.Description}

      <Link to={"/update/" + props._id}>
        {" "}
        <button className="ButtonEdit">Edit</button>
      </Link>

      <button className="ButtonDelete">Delete</button>
    </div>
  );
}

export default ProfileCard;
