import React, { Component, Fragment } from "react";
import MainComponent from "./Components/MainComponent/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <MainComponent />
      </Fragment>
    );
  }
}

export default App;
