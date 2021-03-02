import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark trimcolor">
      <Link to="/search" className="navbar-brand">
        Google Books
      </Link>
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
    </nav>
  );
}

export default NavBar;
