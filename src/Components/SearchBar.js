import React, { Component } from "react";
import "../style/RoutingFuncionality.css";
import "../style/App.css";
import maps from "../apis/maps";

class SearchBar extends Component {
  state = {
    term: ""
  };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className={"searchbar"}>
        <form onSubmit={this.onFormSubmit} className={"ui form"}>
          <input
            type="text"
            name="search"
            placeholder="Search for a starting point.."
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
