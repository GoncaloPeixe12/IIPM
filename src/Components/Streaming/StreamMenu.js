import React, { Component } from 'react';
import '../../style/Streaming/StreamMenu.css';
import {FaPhone, FaVideo, FaCog, FaAngleDoubleLeft } from 'react-icons/fa';
import { Redirect  } from 'react-router-dom';
import '../../style/Streaming/Menu.css';
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
                           
                <div className={'menu'}>
                    <button className={'backButton notBackground'} onClick={() => this.props.history.go(-1)}><FaAngleDoubleLeft size='4em'/></button>
                    <div className={'menuText notBackground'}>Stream</div>                 
                    <div className={'buttonContainer'}>
                        <button className={'roundButton notBackground'} onClick={this.handleCall}><FaPhone size='4em'/></button>
                        <button className={'roundButton rightButton notBackground'} onClick={this.handleStream}><FaVideo size='4em'/></button>
                    </div>
                    <button className={'settingsButton notBackground'}><FaCog size='4em'/></button>
                </div>
            </div>
        )
    }
}

export default StreamMenu;
