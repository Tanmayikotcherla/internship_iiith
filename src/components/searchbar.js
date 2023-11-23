// components/SearchBar.js
import React from "react";
import "../styles/searchbar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <button type="button">Search</button>
    </div>
  );
};

export default SearchBar;
