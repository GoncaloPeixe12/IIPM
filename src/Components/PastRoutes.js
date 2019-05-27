import React, { Component } from "react";
import "../style/App.css";
import "./RoutingOptions";
import RoutingOptions from "./RoutingOptions";
class PastRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      tabId: ""
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
        <div onClick={() => this.handleHover(1)}>
          {this.state.tabId === 1 && this.state.hover === true ? (
            <RoutingOptions text="Route: 4/2/2019" />
          ) : (
            "Route: 4/2/2019"
          )}
        </div>
        <div onClick={() => this.handleHover(2)}>
          {this.state.tabId === 2 && this.state.hover === true ? (
            <RoutingOptions text="Route: 17/2/2019" />
          ) : (
            "Route: 17/2/2019"
          )}
        </div>
        <div onClick={() => this.handleHover(3)}>
          {this.state.tabId === 3 && this.state.hover === true ? (
            <RoutingOptions text="Route: 5/3/2019" />
          ) : (
            "Route: 5/3/2019"
          )}
        </div>
        <div onClick={() => this.handleHover(4)}>
          {this.state.tabId === 4 && this.state.hover === true ? (
            <RoutingOptions text="Route: 20/3/2019" />
          ) : (
            "Route: 20/3/2019"
          )}
        </div>
      </div>
    );
  }
}
export default PastRoutes;
