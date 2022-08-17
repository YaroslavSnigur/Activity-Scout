import React, { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import MenuButton from "../MenuButton/MenuButton";


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
            <p className="Logo">Brand</p>
            <div className="SearchBar">
                <p>hiking, capmsites, parks</p> <p>|</p>
                <p>Toronto, ON</p>
            </div>
            <button className="SearchButton">Search</button>
            <MenuButton
                name="Upload a Spot"
                styleRef="UploadSpotButton"
                route="/createPost"
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
                <LoginForm showLogin={showLogin.showLogin} setShowLogin={setShowLogin} setUserInState={props.setUserInState} user={props.user} />
                <SignUpForm
                    showSignUp={showSignUp.showSignUp}
                    setShowSignUp={setShowSignUp}
                    setUserInState={props.setUserInState} user={props.user}
                /> </div> <div style={{ display: props.user ? "flex" : "none" }}> Logged as {props.user && props.user.name}
                <button
                    className="SignOutButton"
                    onClick={handleLogout}
                ></button>

            </div>
        </div>
    );
}

export default Nav;
