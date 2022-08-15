import React from "react";
import MenuButton from "../MenuButton/MenuButton";

function Nav(props) {
  return (
    <div className="nav">
      <p className="Logo">Brand</p>
      <div className="SearchBar">
        <p>hiking, capmsites, parks</p> <p>|</p>
        <p>Toronto, ON</p>
      </div>
      <button className="SearchButton">Search</button>
      <button className="UploadSpotButton">Upload a Spot</button>
      <MenuButton
        name="Upload a Spot"
        styleRef="UploadSpotButton"
        route="/createPost"
      />
      <button className="LoginButton">Log In</button>
      <button className="SignUpButton">Sign Up</button>
    </div>
  );
}

export default Nav;
