import React, { Component } from "react";
import Hub from "./Hub";
import "bootstrap/dist/css/bootstrap.css";
import "../style/Home.css";
import { FaBatteryFull, FaQuestionCircle } from "react-icons/fa";
import {Redirect} from 'react-router-dom';

class Home extends Component {

  state = {
    toHelp: false
  }

  handleHelp = (user) => {
    this.setState(() => ({
      toHelp: true
    }))
  }

  render() {
    if(this.state.toHelp === true){
      return <Redirect push to='/Home/Help'/>
    }

    return (
      <div className={"Home"}>
        <div className={"container"}>
          <div className={"row"}>
            <h1 className={"welcome"}>Welcome!</h1>
            <FaBatteryFull
              size="3em"
              style={{ right: "1%", top: "1%", position: "absolute" }}
            />
            <button className={"ui button icon"} style={{ left: "0", top: "0", position: "absolute"}} onClick={()=>this.handleHelp()}>
              <FaQuestionCircle size="3em"/>
            </button>
          </div>
        </div>
        <Hub />
      </div>
    );
  }
}
export default Home;
