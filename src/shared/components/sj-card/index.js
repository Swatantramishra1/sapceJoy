import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

import SjText from "../sj-text";
import SjButton from "../sj-button";

import { NAME_ICON_BG_COLORS, COLORS } from "../../data/colors";
import getNestedValue from "../../services/utill.service";

import "./style.css";
class SjCard extends Component {
  render() {
    const color =
      NAME_ICON_BG_COLORS[
        Math.floor(Math.random() * NAME_ICON_BG_COLORS.length)
      ];
    let btns = "";

    if (this.props.card && this.props.card.btns) {
      btns = this.props.card.btns.map((btn, index) => {
        return (
          <SjButton
            color={btn.color}
            borderColor={btn.color}
            text={btn.text}
            key={`btn` + index}
          ></SjButton>
        );
      });
    }

    const imageUrl = getNestedValue(this.props.card, "img_url", undefined);
    return (
      <div className={`card-container `}>
        <div className="row row-spaceBetween row-top">
          <div className="row row-top">
            {imageUrl ? (
              <div className="image">
                <img src={imageUrl} key="1"></img>
              </div>
            ) : (
              <div
                className="nameIcon"
                style={{ backgroundColor: this.props.card.title.color }}
              >
                {this.props.card.title.text[0].toUpperCase()}
              </div>
            )}

            <div className="spacer16"></div>
            <div className="column col-left">
              <div className="column col-left info">
                <SjText
                  type="body"
                  text={this.props.card.title.text}
                  color={COLORS.BLACK[50]}
                ></SjText>
                <SjText
                  type="body"
                  text={this.props.card.sub_title}
                  color={COLORS.BLACK[30]}
                ></SjText>
              </div>
              <div className="divider16"></div>
              <div className="row row-left">{btns}</div>
            </div>
          </div>

          <div className="icon" style={{ color: this.props.iconColor }}>
            <FontAwesomeIcon icon={faBell} />
          </div>
        </div>
      </div>
    );
  }
}

export default SjCard;
