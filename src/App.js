import React, { Component } from 'react';
import './style/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import RoutingFuncionalityRouter from './Components/RoutingFuncionalityRouter';
import MainOptions from "./Components/MainOptions";

class App extends Component {

  render() {
      return (
        <Router>
            <Route path={'/Home'} component={Home}/>
            <Route path={'/FuncRouter/1'} component={RoutingFuncionalityRouter}/>
            <Route path={'/Home/Options'} component={MainOptions}/>
        </Router>

    );
  }
}


export default App;
