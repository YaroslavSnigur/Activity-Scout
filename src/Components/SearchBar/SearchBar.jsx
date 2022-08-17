import React from "react";
import { Link } from "react-router-dom";

function SearchBar(props) {
  return (
    <div className="SearchBar">
      <input name="searchBar" />
      <Link to="/filter">
        <button name="Search" className="SearchButton">
          Search
        </button>
      </Link>
    </div>
  );
}

export default SearchBar;
