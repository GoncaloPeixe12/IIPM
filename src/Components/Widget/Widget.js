import React, {Component} from 'react';
import '../../style/Widget.css';
import Weather from './Weather.js';

class Widget extends Component{
    render(){
        return(
            <div className={'widget'}>
                <Weather/>    
            </div>
        )
    }
}

export default Widget;