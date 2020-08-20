import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faTasks,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

import SjText from "../sj-text";
import SjCard from "../sj-card";
import SjAddItemModal from "../sj-addItemModal";

import { TASK_LISTS } from "../../data/tasks";

import "./style.css";
class SjTaskList extends Component {
  onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      openTaskSectionIndex: undefined,
    };
  }

  handleOpen = () => {
    this.setState({ showModal: true, openTaskSectionIndex: this.props.index });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  handleSubmit = (form) => {
    console.log(form);
    const tasks = TASK_LISTS;
    tasks[this.state.openTaskSectionIndex].cards.push({
      img_url: "",
      title: {
        text: form.title,
        color: "#008080",
      },
      sub_title: form.subTitle,
      btns: [
        {
          text: form.button1,
          color: "#ff7171",
        },
        {
          text: form.button2,
          color: "#40bad5",
        },
      ],
    });
    this.handleClose();
  };

  render() {
    const cards = this.props.item.cards.map((card, index) => {
      if (card) {
        return (
          <div
            onDragStart={(e) =>
              this.onDragStart(e, `${this.props.index}-${index}`)
            }
            draggable
            key={`card-div` + index}
          >
            <SjCard card={card} index={index} key={`card` + index}></SjCard>
          </div>
        );
      }
    });

    // console.log(cards);

    return (
      <div className={`task-list-container`}>
        <div className="row row-spaceBetween">
          <div className="column col-left">
            <SjText text={this.props.item.title} type="body"></SjText>
            <SjText
              text={`${this.props.item.cards.length} ${this.props.item.sub_title}`}
              type="caption"
            ></SjText>
          </div>

          <FontAwesomeIcon className="icon" icon={faEllipsisV} />
        </div>

        <div className="divider16"></div>

        <div className="addButton row row-center" onClick={this.handleOpen}>
          <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
          <div className="spacer8"></div>
          <SjText text="Add new item" type="paragraph"></SjText>
        </div>

        <div className="divider16"></div>
        {cards.length > 0 ? (
          <div>{cards}</div>
        ) : (
          <div className="column notAvailable">
            <div className="item-notAvailable row row-center">
              <FontAwesomeIcon icon={faTasks}></FontAwesomeIcon>
              <div className="spacer16"></div>
              <SjText text="No item available" type="caption" />
            </div>
          </div>
        )}

        <SjAddItemModal
          show={this.state.showModal}
          handleClose={this.handleClose}
          handleSubmit={this.handleSubmit}
        ></SjAddItemModal>
      </div>
    );
  }
}

export default SjTaskList;
