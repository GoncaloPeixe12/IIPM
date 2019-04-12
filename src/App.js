import React, { Component } from 'react';
import './style/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import RoutingFuncionalityRouter from './Components/RoutingFuncionalityRouter';
import Widget from './Components/Widget'
import MainOptions from "./Components/MainOptions";
import Streaming from './Components/Streaming/StreamingRouter';

class App extends Component {

  render() {
      return (
        <div className={'base'}>
        <Router>
            <Route path={'/Home'} exact component={Home}/>
            <Route path={'/FuncRouter/1'} component={RoutingFuncionalityRouter}/>
            <Route path={'/'} component={Widget}/>
            <Route path={'/Home/Options'} component={MainOptions}/>
            <Route path={'/StreamFunc'} component={Streaming}/>
        </Router>
        </div>

    );
  }
}


export default App;
