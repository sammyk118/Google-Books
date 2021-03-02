import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/search" className="navbar-brand">
        Google Books
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/search" className="nav-link">
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/saved" className="nav-link">
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
