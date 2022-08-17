import React from "react";
import { Link } from "react-router-dom";

function MenuButton(props) {
  return (
    <>
      <Link to={props.route}>
        <button className={props.styleRef}>{props.name}</button>
      </Link>
    </>
  );
}

export default MenuButton;
