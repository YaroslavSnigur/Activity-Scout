import React from "react";
import { Link } from "react-router-dom";
import "./MenuButton.css"

function MenuButton(props) {
  return (
    <>
      <Link to={props.route}>
        <button className="MenuButton">{props.name}</button>
      </Link>
    </>
  );
}

export default MenuButton;
