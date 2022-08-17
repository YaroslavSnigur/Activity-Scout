import React from "react";
import { Link } from "react-router-dom";

function ProfileButton(props) {
  return (
    <>
      <Link to="/profile">
        <button className={props.styleRef}>{props.name}</button>
      </Link>
    </>
  );
}
export default ProfileButton;
