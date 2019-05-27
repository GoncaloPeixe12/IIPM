import React from "react";
import RoutingOptions from "./RoutingOptions";

class Route extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      tabId: "",
      routeData: this.props.date,
      render: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }
  handleClick = id => {
    this.setState({
      click: !this.state.click,
      tabId: id
    });
    console.log(this.state.tabId);
  };
  handleDeleteClick = () => {
    this.setState({
      render: false
    });
    console.log("Iran" + this.state.render);
  };
  render() {
    if (this.state.render) {
      return (
        <div>
          <div onClick={() => this.handleClick(this.props.id)}>
            {this.state.tabId === this.props.id && this.state.click === true ? (
              <RoutingOptions
                text={this.state.routeData}
                hideMe={() => this.handleDeleteClick()}
              />
            ) : (
              "Route : " + this.state.routeData
            )}
          </div>
        </div>
      );
    }
    return <div />;
  }
}
export default Route;
