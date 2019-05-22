import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

class RoutingOptions extends Component {

   
    render() {
        return(
            <div className="grid-container">
                <div>{this.props.text}</div>
                <Link to={'1/2'}>Review</Link>
                <div>Rename</div>
                <div>Delete</div>
            </div>
        )
    }
}
export default RoutingOptions;