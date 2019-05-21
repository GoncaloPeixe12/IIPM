import React, { Component } from "react";
import iu from "../iu.png";
import "../style/Ex.css";
import SearchBar from "./SearchBar";
import maps from "../apis/maps";

class PlanEx extends Component {
  state = {
    image: iu
  };
  onFormSubmit = async term => {
    const response = await maps.get("/mia/1.6/", {
      params: {
        // co: term
      }
    });
    console.log(response);
    this.setState({
      image: response.data.items
    });
  };

  render() {
    return (
      <div className={"ex"}>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <img src={this.state.image} alt={"Runpic"} />
      </div>
    );
  }
}
export default PlanEx;
