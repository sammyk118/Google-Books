import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Saved from "./Components/Saved";
import Search from "./Components/Search";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/search", "/"]} component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="*" component={Search} />
      </Switch>
    </Router>
  );
}

export default App;