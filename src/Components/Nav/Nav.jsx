import React, { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import MenuButton from "../MenuButton/MenuButton";
import "./Nav.css";
import ProfileButton from "../ProfileButton/ProfileButton";

import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

function Nav(props) {
  const [showLogin, setShowLogin] = useState({
    showLogin: false,
  });

  const [showSignUp, setShowSignUp] = useState({
    showSignUp: false,
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    props.setUserInState(null);
    setShowSignUp({ showSignUp: false });
    setShowLogin({ showLogin: false });
  };

  return (
    <div className="nav">
      <div className="logo-image">
        <img src="../../Logo-Black.png" alt="" />
      </div>
      <SearchBar
        searchQuery={props.searchQuery}
        setSearchQuery={props.setSearchQuery}
      />
      <MenuButton
        name="Upload a Spot"
        styleRef="UploadSpotButton"
        route="/createPost"
        user={props.user}
      />

      <div style={{ display: props.user ? "none" : "flex" }}>
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
        <LoginForm
          showLogin={showLogin.showLogin}
          setShowLogin={setShowLogin}
          setUserInState={props.setUserInState}
          user={props.user}
        />
        <SignUpForm
          showSignUp={showSignUp.showSignUp}
          setShowSignUp={setShowSignUp}
          setUserInState={props.setUserInState}
          user={props.user}
        />{" "}
      </div>

      <div
        className="user-loggedin-container"
        style={{ display: props.user ? "flex" : "none" }}
      >
        <div className="user-loggedin">
          <span>Logged as</span>{" "}
          <span className="user-loggedin-span">
            {props.user && props.user.name}
          </span>
        </div>
        <ProfileButton
          name="My Profile"
          styleRef=""
          route="/profile"
          className="my-profile-button"
        />
      </div>
      <MenuButton name="My Profile" styleRef="" route="/profile" />
      <button className="SignOutButton" onClick={handleLogout}>
        Sign Out
      </button>
    </div>
  );
}

export default Nav;
