import React, { Component } from 'react';
import './style/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import RoutingFuncionality from './Components/RoutingFuncionality';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, browserHistory} from 'react-router-dom';

class App extends Component {

  render() {
      return (
        <Router>
            <Route path={'/Home'} component={Home}/>
            <Route path={'/RoutingFuncionality/'} component={RoutingFuncionality}/>
        </Router>

    );
  }
}


export default App;
