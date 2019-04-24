import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import StreamMenu from './StreamMenu';
import StreamFunc from './StreamFunc';
import StreamFuncSettings from './StreamFuncSettings';
import CallFunc from './CallFunc';
import ContactList from './ContactList';
import HelpMenu from './HelpMenu';

import "../../style/Home.css";
import Home from '../Home';


class StreamingRouter extends Component {
    render() {
        return(
            <div>
                <Router>
                    <Route path={'/StreamFunc'} exact component={StreamMenu}/>
                    <Route path={'/StreamFunc/Stream'} exact component={StreamFunc}/>
                    <Route path={'/StreamFunc/Settings/:id'} component={StreamFuncSettings}/>
                    <Route path={'/StreamFunc/Call'} exact component={CallFunc}/>
                    <Route path={'/StreamFunc/Call/Contacts'} component={ContactList}/>
                    <Route path={'/StreamFunc/Help'} component={HelpMenu}/>
                    <Route path={'/Home'} component={Home}/>
                </Router>
            </div>
        )
    }
}
export default StreamingRouter;