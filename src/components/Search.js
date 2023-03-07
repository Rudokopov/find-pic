import React from "react";
import "./Search.css";

function Search({ placeholder, value, onChange, onKeyDown }) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="search-input"
    ></input>
  );
}

export default Search;
