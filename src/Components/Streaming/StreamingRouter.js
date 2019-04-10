import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import StreamMenu from './Streaming/StreamMenu';
import StreamFunc from './Streaming/StreamFunc';
import StreamSettings from './Streaming/StreamSettings';
import CallFunc from './Streaming/CallFunc';
import CallOptions from './Streaming/CallOptions';
import ContactList from '/Streaming/ContactList';

import "../style/Home.css";
import Home from '../Home';
import PastRoutes from "../PastRoutes";

class StreamingRouter extends Component {
    render() {
        return(
            <div className={'Home'}>
                <Router>
                    <Route path={'/StreamFunc'} component={SteamMenu}/>
                    <Route path={'/StreamFunc/1'} exact component={StreamFunc}/>
                    <Route path={'/StreamFunc/1/1'} component={StreamSettings}/>
                    <Route path={'/StreamFunc/2'} exact component={CallFunc}/>
                    <Route path={'/StreamFunc/2/1'} exact component={CallOptions}/>
                    <Route path={'/StreamFunc/2/2'} component={ContactList}/>
                    <Route path={'/Home'} component={Home}/>
                </Router>
            </div>
        )
    }
}
export default StreamingRouter;