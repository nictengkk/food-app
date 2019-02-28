import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import Router from "../src/components/Router/Router";
import NavBar from "../src/components/NavBar/NavBar";

library.add(faUtensils);
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
