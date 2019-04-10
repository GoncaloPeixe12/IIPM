import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';

class Options extends Component {
    render() {
        return(
            <div className={'grid-container'}>
                <div>Route Settings</div>
                <div><Link to={'/FuncRouter/1/3/1'}>Past Routes</Link></div>
                <div>About</div>
            </div>
        )
    }
}

export default Options;