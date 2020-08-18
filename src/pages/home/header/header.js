import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./header.css";
import SjText from "../../../shared/components/sj-text";

class Header extends Component {
  render() {
    return (
      <div className="row row-spaceBetween header">
        <div className="row left">
          <FontAwesomeIcon icon={faBars} />
          <div className="spacer12"></div>
          <SjText text="HAIDENTICA" type="title"></SjText>
        </div>
        <div className="right"></div>
      </div>
    );
  }
}

export default Header;
