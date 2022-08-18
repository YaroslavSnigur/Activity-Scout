import React from "react";
import "./ProfileCard.css";

function ProfileCard(props) {
  return (
    <div id="profile-card">
      <div>Name:&nbsp;{props.LocationName}</div>
      <div>Location:&nbsp;{props.Address}</div>
      <div>Fees:&nbsp;{props.Fee}</div>
      <div>Description:&nbsp;{props.Description}</div>
      <div className="profile-card-button-container">
        <div ><button className="ButtonEdit">Edit</button></div>
        <div> <button className="ButtonDelete">Delete</button></div>
      </div>


    </div>
  );
}

export default ProfileCard;
