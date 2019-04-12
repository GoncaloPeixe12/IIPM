import React, { Component } from 'react';
import '../../style/Streaming/StreamMenu.css';
import {FaPhone, FaVideo } from 'react-icons/fa';
import { Redirect  } from 'react-router-dom';
import Menu from './Menu';
import '../../style/Home.css';

class StreamMenu extends Component{
    state = {
        toStream : false,
        toCall : false,
    }

    handleCall = (user) => {
        this.setState(() => ({
            toCall: true
        }))
    }

    handleStream = (user) => {
        this.setState(() => ({
            toStream: true
        }))
      }

    render(){
        if(this.state.toStream === true){
            return <Redirect to='/StreamFunc/1'/>
        }

        if(this.state.toCall === true){
            return <Redirect to='/StreamFunc/2'/>
        }

        return(
               
            <div className={'Home'}>
                <Menu/>
            
                <div className={'menu'}>
                    <div className={'buttonContainer'}>
                        <button className={'roundButton'} onClick={this.handleCall}><FaPhone size='4em'/></button>
                        <button className={'roundButton rightButton'} onClick={this.handleStream}><FaVideo size='4em'/></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default StreamMenu;
