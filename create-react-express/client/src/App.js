import React, { component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import NavBar from "./Components/NavBar";
// import Jumbotron from "./Components/Jumbotron";
// import SearchBar from "./Components/SearchBar";
// import Table from "./Components/Table";
import Saved from "./Components/Saved";
import Search from "./Components/Search";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Search} />
        <Route path="/saved" component={Saved} />
      </Switch>
    </Router>
  );
}

export default App;