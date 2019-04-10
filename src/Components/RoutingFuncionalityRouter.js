import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import TopMenu from './TopMenu';
import RoutingFuncionality from './RoutingFuncionality';
import PlanEx from "./PlanEx";
import RunEx from "./RunEx";
import Options from './Options';
import "../style/Home.css";
import Home from './Home';
import PastRoutes from "./PastRoutes";

class RoutingFuncionalityRouter extends Component {
    render() {
        return(
            <div className={'Home'}>
                <Router>
                    <Route path={'/FuncRouter'} component={TopMenu}/>
                    <Route path={'/FuncRouter/1'} exact component={RoutingFuncionality}/>
                    <Route path={'/FuncRouter/1/1'} component={PlanEx}/>
                    <Route path={'/FuncRouter/1/2'} component={RunEx}/>
                    <Route path={'/FuncRouter/1/3'} exact component={Options}/>
                    <Route path={'/FuncRouter/1/3/1'} component={PastRoutes}/>
                    <Route path={'/Home'} component={Home}/>
                </Router>
            </div>
        )
    }
}
export default RoutingFuncionalityRouter;