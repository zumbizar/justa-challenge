import React, { Component } from "react";

import "./styles/globalstyles.css";

import Header from "./components/Header/Header";
import Pages from "../src/pages/Pages";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-Component">
            <Switch>
              <Route path="/" exact component={Header} />
              <Route path="/Pages" component={Pages} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
