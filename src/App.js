import React, { Component } from "react";

import "./styles/globalstyles.css";

import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Component">
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
