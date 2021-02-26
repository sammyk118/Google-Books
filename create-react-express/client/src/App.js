import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Jumbotron from "./Components/Jumbotron";

function App() {
  return (
    <div>
      <NavBar />
      <Jumbotron />
    </div>
  );
}

export default App;
