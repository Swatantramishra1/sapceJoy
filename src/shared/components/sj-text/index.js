import React, { Component } from "react";
import "./style.css";

class SjText extends Component {
  render() {
    return (
      <div
        className={`default ${this.props.type}`}
        style={{ color: this.props.color }}
      >
        {this.props.text}
      </div>
    );
  }
}

export default SjText;
