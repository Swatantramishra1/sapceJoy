import React, { Component } from "react";

import SjText from "../sj-text";
import "./style.css";

class SjAddItemModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      subTitle: "",
      button1: "",
      button2: "",
      error: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpdateState = (key, text) => {
    if (!text) {
      return;
    }

    this.setState({
      [key]: text,
    });
  };

  handleSubmit = () => {
    if (
      !this.state.title ||
      !this.state.subTitle ||
      !this.state.button1 ||
      !this.state.button2
    ) {
      this.handleUpdateState("error", true);
      return;
    }

    this.handleUpdateState("error", false);
    this.props.handleSubmit(this.state);
  };

  render() {
    const { show, handleClose } = this.props;

    if (!show) {
      return null;
    }

    return (
      <div className="modal display-block">
        <section className="column col-left modal-main">
          <div className="modal-header">
            <SjText text="Add Item" type="title"></SjText>
          </div>

          <div className="divider16" />
          <div className="modal-body">
            <div className="column col-left">
              <label> Title </label>
              <div className="divider8" />
              <input
                type="text"
                placeholder="Enter item title"
                onKeyUp={(e) => this.handleUpdateState("title", e.target.value)}
              ></input>
            </div>

            <div className="divider24" />

            <div className="column col-left">
              <label> Sub title </label>
              <div className="divider8" />
              <input
                type="text"
                placeholder="Enter item sub title"
                onKeyUp={(e) =>
                  this.handleUpdateState("subTitle", e.target.value)
                }
              ></input>
            </div>

            <div className="divider24" />

            <div className="column col-left">
              <label> Button 1 </label>
              <div className="divider8" />
              <input
                type="text"
                minLength="10"
                placeholder="Enter item button 1"
                onKeyUp={(e) =>
                  this.handleUpdateState("button1", e.target.value)
                }
              ></input>
            </div>
            <div className="divider24" />

            <div className="column col-left">
              <label> Button 2 </label>
              <div className="divider8" />
              <input
                type="text"
                placeholder="Enter item button 2"
                minLength="10"
                onKeyUp={(e) =>
                  this.handleUpdateState("button2", e.target.value)
                }
              ></input>
            </div>
          </div>

          <div
            className="row row-left"
            style={{ display: this.state.error ? "block" : "none" }}
          >
            <SjText type="caption" text="Please enter details" color="red" />
          </div>

          <div className="modal-footer row row-right">
            <button className="close" onClick={handleClose}>
              CLOSE
            </button>
            <div className="spacer16" />
            <button className="submit" onClick={this.handleSubmit}>
              SUBMIT
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default SjAddItemModal;
