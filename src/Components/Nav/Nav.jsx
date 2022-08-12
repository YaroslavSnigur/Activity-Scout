import React from "react";

function Nav(props) {
    return (
        < div className="nav" >
            <p className="Logo">Brand</p>
            <div className="SearchBar">
                <p>hiking, capmsites, parks</p> <p>|</p>
                <p>Toronto, ON</p>
            </div>
            <button className="SearchButton">Search</button>
            <p className="UploadSpotButton">Upload a Spot</p>
            <button className="LoginButton">Log In</button>
            <button className="SignUpButton">Sign Up</button>

        </div >
    );
}

export default Nav; 