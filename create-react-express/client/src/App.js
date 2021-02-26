import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* <Route exact path="/books" component={books} />
          <Route exact path="/search" component={search} /> */}
          <Route exact path="*" />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
