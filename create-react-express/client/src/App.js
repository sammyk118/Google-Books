import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Jumbotron from "./Components/Jumbotron";
import SearchBar from "./Components/SearchBar"
import Table from "./Components/Table"

function App() {
  return (
    <div>
      <NavBar />
      <Jumbotron />
      <SearchBar/>
      <Table/>
    </div>
  );
}

export default App;
