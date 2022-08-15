import React from "react";
import { Link } from "react-router-dom";

function MenuButton(props) {
  return (
    <>
      <Link to="/createPost">
        <button className={props.styleRef}>{props.name}</button>
      </Link>
    </>
  );
}

export default MenuButton;
