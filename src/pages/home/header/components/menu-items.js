import React, { Component } from "react";

import SjText from "../../../../shared/components/sj-text";

import "./menu-items.css";
class MenuItems extends Component {
  render() {
    return (
      <div className="row left">
        <div className="column ">
          <SjText text="Dashboard" type="action14"></SjText>
          <div className="bar"></div>
        </div>
        <div className="spacer32"></div>
        <div className="column active">
          <SjText text="Workflow" type="action14"></SjText>
          <div className="bar"></div>
        </div>
      </div>
    );
  }
}

export default MenuItems;
