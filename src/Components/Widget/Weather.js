import React, {Component} from 'react';
import '../../style/Widget.css';

class Weather extends Component{
    render(){
        return(
            <div className={'info'}>
                    <h1 className={'loc'}>Weather:</h1>
                    <p className={'infoTxt'}>22ºC</p>
            </div>
        )
    }
}

export default Weather;