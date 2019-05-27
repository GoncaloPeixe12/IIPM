import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class RoutingOptions extends Component {
  constructor(props) {
    super(props);
    this.handleDeletion = this.handleDeletion.bind(this);
  }
  state = {
    renderMe: true
  };
  handleDeletion = e => {
    e.preventDefault();
    this.setState({
      renderMe: false
    });
    console.log(this.state.renderMe);
  };
  render() {
    if (this.state.renderMe) {
      return (
        <div className="grid-container">
          <div>{this.props.text}</div>
          <Link to={"1/2"}>Review</Link>
          <div />
          <button
            className={"ui button classic-button"}
            onClick={this.props.hideMe}
            style={{ padding: "0" }}
          >
            Delete Run
          </button>
        </div>
      );
    }
    return <div />;
  }
}
export default RoutingOptions;
