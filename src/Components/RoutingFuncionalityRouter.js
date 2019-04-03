import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import TopMenu from './TopMenu';
import RoutingFuncionality from './RoutingFuncionality';
import PlanEx from "./PlanEx";
import RunEx from "./RunEx";
import Options from './Options';

class RoutingFuncionalityRouter extends Component {
    render() {
        return(
            <Router>
                <Route path={'/FuncRouter'} component={TopMenu}/>
                <Route path={'/FuncRouter/1'} component={RoutingFuncionality}/>
                <Route path={'/FuncRouter/2'} component={PlanEx}/>
                <Route path={'/FuncRouter/3'} component={RunEx}/>
                <Route path={'/FuncRouter/3'} component={Options}/>
            </Router>
        )
    }
}
export default RoutingFuncionalityRouter;