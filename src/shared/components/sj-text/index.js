import React, { Component } from "react";
import "./index.scss";

class SjText extends Component {
  render() {
    return (
      <div className={`default ${this.props.type}`}>{this.props.text}</div>
    );
  }
}

export default SjText;
