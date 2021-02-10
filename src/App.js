import React, { Component } from "react";

import "./styles/globalstyles.css";

import SearchBar from "./components/SearchBar/SearchBar";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Component">
          <Header />
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
