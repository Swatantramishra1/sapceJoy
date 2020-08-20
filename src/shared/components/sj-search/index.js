import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

class SjSearch extends Component {
  render() {
    let className = "searchBottomBorder";
    if (this.props.isBorderRadius) {
      className = "searchBorder";
    }

    return (
      <div className={`row search-box-container ${className}`}>
        <input type="text" placeholder="Type something..." />
        <div className="searchIcon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    );
  }
}

export default SjSearch;
