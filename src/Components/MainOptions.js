import React, {Component} from 'react';
import '../style/Home.css';
import '../style/MainOptions.css';
import {Link, } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import { FaHome, FaAngleDoubleLeft } from "react-icons/fa";
import Button from 'react-bootstrap/Button';


class MainOptions extends Component {
    render() {
        return (
            <div className={"Home"}>
                <div className={'optionsTab'}>
                    <div className={"opt"}>Settings</div>
                    <div className={"opt"}>Themes</div>
                    <div className={"opt"}>Security</div>
                    <div className={"opt"}>About</div>
                </div>
                <div className={'options'}>
                    <Button style = {{border:'solid 2px black'}}onClick={this.props.history.goBack}><FaAngleDoubleLeft/></Button>
                    <div className={'tabItem'}>
                    </div>
                    <div className={'tabItem'}>
                    </div>
                    <div className={'tabItem'}>
                    </div>
                    <div className={'tabItem'}>
                    </div>
                </div>

                
            </div>
        )
    }
}
export default MainOptions