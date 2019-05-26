import React, { Component } from "react";
import runpic from "../runpic.png";
import "../style/Ex.css";
import Maps from "./Maps";
class ReviewRun extends Component {
  render() {
    return (
      <div className={"runEx"}>
        <Maps lng={55.384958} lat={45.32654} />
      </div>
    );
  }
}
export default ReviewRun;
