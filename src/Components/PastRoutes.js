import React, { Component } from "react";
import "../style/App.css";
import Route from "./Route";

class PastRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      tabId: "",
      render: true
    };
    this.handleHover = this.handleHover.bind(this);
  }
  handleHover = id => {
    this.setState({
      hover: !this.state.hover,
      tabId: id
    });
  };
  render() {
    return (
      <div className={"grid-container"}>
        <Route id={1} date={"24/10/2018"} hideMe={this.handleDeleteClick} />
        <Route id={2} date={"30/11/2018"} hideMe={this.handleDeleteClick} />
        <Route id={3} date={"11/12/2018"} hideMe={this.handleDeleteClick} />
        <Route id={4} date={"5/4/2019"} hideMe={this.handleDeleteClick} />
      </div>
    );
  }
}
export default PastRoutes;
