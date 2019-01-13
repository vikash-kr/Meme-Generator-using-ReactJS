import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "./component/Header.js";
import MemeGenerator from "./MemeGenerator.js";

class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <MemeGenerator />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
