import React, {Component} from 'react';
import '../style/Widget.css';

class Widget extends Component{
    render(){
        return(
            <div className={'widget'}>
                <div className={'info'}>
                    <h1 className={'loc'}>Weather:</h1>
                    <p className={'infoTxt'}>22ºC</p>
                </div>
                
            </div>
        )
    }
}

export default Widget;