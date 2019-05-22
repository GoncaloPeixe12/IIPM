import React, { Component } from "react";
import iu from "../iu.png";
import "../style/Ex.css";
// import SearchBar from "./SearchBar";
import Maps from "./Maps";

class PlanEx extends Component {
  state = {
    image: iu
  };

  render() {
    return (
      <div className={"ex"}>
        <Maps />
      </div>
    );
  }
}
export default PlanEx;
