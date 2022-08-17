import { TextField } from "@mui/material";
import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => (
  <div className="SearchBar">
    <form action="/" method="get">
      <label htmlFor="header-search">
        <span className="visually-hidden">Search blog posts</span>
      </label>
      <input
        value={props.searchQuery}
        onInput={(e) => props.setSearchQuery(e.target.value)}
        type="text"
        id="header-search"
        placeholder="Search blog posts"
        name="s"
      />

      <button className="SearchButton">Search</button>
    </form>
  </div>
);

export default SearchBar;
