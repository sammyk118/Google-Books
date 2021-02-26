import React from "react";
import "./style.css";

function SearchBar() {
  return (
    <div className="card">
      <div class="input-group">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <button type="button" class="btn btn-outline-primary">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
