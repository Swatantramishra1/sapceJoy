import React, { Component } from "react";

import SjText from "../sj-text";
import "./style.css";

class SjButton extends Component {
  render() {
    return (
      <div
        className={`button-container`}
        style={{
          color: this.props.color,
          borderColor: this.props.borderColor,
          backgroundColor: this.props.bgColor,
        }}
      >
        <SjText type="caption" text={this.props.text}></SjText>
      </div>
    );
  }
}

export default SjButton;
