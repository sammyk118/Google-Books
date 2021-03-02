import React from "react";
import "./style.css";


function SearchBar(props) {
  return (
    <div className="card mb-5 d-block mx-auto" id="searchbar">
      <div className="input-group">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          value={props.value}
          onChange={props.onChange}
        />
        <button type="button" className="btn btn-outline-primary" onClick={props.onClick} >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
