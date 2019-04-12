import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import StreamMenu from './StreamMenu';
import StreamFunc from './StreamFunc';
import StreamSettings from './StreamSettings';
import CallFunc from './CallFunc';
import CallOptions from './CallOptions';
import ContactList from './ContactList';

import "../../style/Home.css";
import Home from '../Home';


class StreamingRouter extends Component {
    render() {
        return(
            <div className={'Home'}>
                <Router>
                    <Route path={'/StreamFunc'} exact component={StreamMenu}/>
                    <Route path={'/StreamFunc/1'} exact component={StreamFunc}/>
                    <Route path={'/StreamFunc/1/1'} component={StreamSettings}/>
                    <Route path={'/StreamFunc/2'} exact component={CallFunc}/>
                    <Route path={'/StreamFunc/2/1'} component={CallOptions}/>
                    <Route path={'/StreamFunc/2/2'} component={ContactList}/>
                    <Route path={'/Home'} component={Home}/>
                </Router>
            </div>
        )
    }
}
export default StreamingRouter;