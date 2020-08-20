import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUserPlus,
  faBell,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";

import SjText from "../../../shared/components/sj-text";
import SjSearch from "../../../shared/components/sj-search";

import MenuItems from "./components/menu-items";

import "./header.css";
class Header extends Component {
  render() {
    return (
      <div className="row row-spaceBetween header">
        <div className="row left">
          <FontAwesomeIcon className="icon" icon={faBars} />
          <div className="spacer16"></div>
          <SjText text="HAIDENTICA" type="body"></SjText>
          <div className="spacer32"></div>
          <div className="spacer32"></div>
          <MenuItems></MenuItems>
        </div>
        <div className="row right">
          <div className="search">
            <SjSearch></SjSearch>
          </div>

          <div className="spacer32"></div>
          <div className="spacer12"></div>
          <FontAwesomeIcon className="icon" icon={faUserPlus} />
          <div className="spacer32"></div>
          <div className="spacer12"></div>
          <FontAwesomeIcon className="icon" icon={faBell} />

          <div className="spacer32"></div>
          <div className="spacer12"></div>
          <FontAwesomeIcon className="icon" icon={faEllipsisV} />
        </div>
      </div>
    );
  }
}

export default Header;
