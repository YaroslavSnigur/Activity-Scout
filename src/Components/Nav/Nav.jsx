import React, { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import MenuButton from "../MenuButton/MenuButton";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

function Nav(props) {
  const [showLogin, setShowLogin] = useState({
    showLogin: false,
  });

  const [showSignUp, setShowSignUp] = useState({
    showSignUp: false,
  });

  return (
    <div className="nav">
      <Link to="/">
        {" "}
        <p className="Logo">Scout</p>
      </Link>

      <SearchBar
        searchQuery={props.searchQuery}
        setSearchQuery={props.setSearchQuery}
      />

      <MenuButton
        name="Upload a Spot"
        styleRef="UploadSpotButton"
        route="/createPost"
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
