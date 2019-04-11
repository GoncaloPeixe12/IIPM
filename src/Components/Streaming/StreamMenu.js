import React, { Component } from 'react';
import '../../style/Streaming/StreamMenu.css';
import {FaPhone, FaVideo } from 'react-icons/fa';

class StreamMenu extends Component{
    render(){

        return(
            <div className={'menu'}>
                <div className={'buttonContainer'}>
                    <button className={'roundButton'}><FaPhone/></button>
                    <button className={'roundButton'}><FaVideo/></button>
                </div>
            </div>
        )
    }
}
