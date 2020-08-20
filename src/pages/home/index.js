import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

import Header from "./header/header";

import SjSearch from "../../shared/components/sj-search";
import SjImageLap from "../../shared/components/sj-img-lap";
import SjTaskList from "../../shared/components/sj-taskList";
import { TASK_LISTS } from "../../shared/data/tasks";

import "./home.css";
class Home extends Component {
  state = {
    tasks: TASK_LISTS,
  };

  onDragOver = (ev) => {
    ev.preventDefault();
  };

  onDrop = (ev, index) => {
    let id = ev.dataTransfer.getData("id");
    const taskListIndex = id.split("-")[0];
    const cardIndex = Number(id.split("-")[1]);
    const oldCard = this.state.tasks[taskListIndex].cards[cardIndex];

    let cards = this.state.tasks[taskListIndex].cards.filter(
      (card, index) => index !== cardIndex
    );

    this.state.tasks[taskListIndex].cards = cards;
    if (oldCard) {
      this.state.tasks[index].cards.unshift(oldCard);
    }

    this.setState({
      ...this.state,
    });
  };

  render() {
    const taskList = this.state.tasks.map((item, index) => {
      return (
        <div
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => {
            this.onDrop(e, `${index}`);
          }}
          className="tasks-container dropzone"
        >
          <SjTaskList
            item={item}
            index={index}
            key={`task` + index}
          ></SjTaskList>
        </div>
      );
    });

    return (
      <div className="container">
        <Header></Header>
        <div className="mainBody">
          <div className="row row-spaceBetween">
            <div className="left">
              <div className="search">
                <SjSearch isBorderRadius="true"></SjSearch>
              </div>
            </div>
            <div className="row right">
              <SjImageLap></SjImageLap>
              <div className="spacer16"></div>
              <div className="fontIcon">
                <FontAwesomeIcon icon={faCog} />
              </div>
            </div>
          </div>
          <div className="row row-spaceBetween row-top">{taskList}</div>
        </div>
      </div>
    );
  }
}

export default Home;
