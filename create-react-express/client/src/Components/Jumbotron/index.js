import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 mt-5">Google Books Search</h1>
        <p className="lead">
         Search for and Save Books of interest
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
