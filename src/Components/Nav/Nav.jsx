import React, { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import MenuButton from "../MenuButton/MenuButton";
import ProfileButton from "../PorfileButton/ProfileButton";

function Nav(props) {
  const [showLogin, setShowLogin] = useState({
    showLogin: false,
  });

  const [showSignUp, setShowSignUp] = useState({
    showSignUp: false,
  });

  return (
    <div className="nav">
      <p className="Logo">Brand</p>
      <div className="SearchBar">
        <p>hiking, capmsites, parks</p> <p>|</p>
        <p>Toronto, ON</p>
      </div>
      <button className="SearchButton">Search</button>
      <p className="UploadSpotButton">Upload a Spot</p>
      <MenuButton
        name="Upload a Spot"
        styleRef="UploadSpotButton"
        route="/createPost"
      />
      <ProfileButton
        name="Profile"
        styleRef="UploadSpotButton"
        route="/profile"
      />
      <button
        className="LoginButton"
        onClick={() => {
          setShowLogin({ showLogin: true });
        }}
      >
        Log In
      </button>
      <button
        className="SignUpButton"
        onClick={() => {
          setShowSignUp({ showSignUp: true });
        }}
      >
        Sign Up
      </button>
      <LoginForm showLogin={showLogin.showLogin} setShowLogin={setShowLogin} />
      <SignUpForm
        showSignUp={showSignUp.showSignUp}
        setShowSignUp={setShowSignUp}
      />
    </div>
  );
}

export default Nav;
