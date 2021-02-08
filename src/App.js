import React, { Component } from "react";

import "./App.css";
import HideText from "./HideText";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src="" className="app-logo" alt="Logo" /> */}
          <h1 className="App-title">Pesquise aqui</h1>
        </header>
        <div className="App-content"></div>
        <HideText text="Hello" />
      </div>
    );
  }
}

export default App;
