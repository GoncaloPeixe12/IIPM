import React, { Component } from "react";
import runpic from "../runpic.png";
import "../style/Ex.css";

class ReviewRun extends Component {
  render() {
    return (
      <div className={"runEx"}>
        <img src={runpic} alt={"Runpic"} />
      </div>
    );
  }
}
export default ReviewRun;
