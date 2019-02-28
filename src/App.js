import React, { Component } from "react";
import Router from "../src/components/Router/Router";
import NavBar from "../src/components/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Router />
      </React.Fragment>
    );
  }
}

export default App;
