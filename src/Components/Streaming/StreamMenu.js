import React, { Component } from 'react';
import '../../style/Streaming/StreamMenu.css';
import {FaPhone, FaVideo, FaCog, FaHome, FaQuestion } from 'react-icons/fa';
import { Redirect  } from 'react-router-dom';
import '../../style/Streaming/Menu.css';
import '../../style/Home.css';

class StreamMenu extends Component{
    state = {
        toStream : false,
        toCall : false,
        toHome: false,
        toHelp: false
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

    handleHome = (user) => {
        this.setState(() => ({
            toHome: true
        }))
    }

    handleHelp = (uesr) => {
        this.setState(() => ({
            toHelp: true
        }))
    }

    render(){
        if(this.state.toStream === true){
            return <Redirect push to='/StreamFunc/1'/>
        }

        if(this.state.toCall === true){
            return <Redirect push to='/StreamFunc/2/2'/>
        }

        if(this.state.toHome === true){
            return <Redirect push to='/Home'/>
        }

        if(this.state.toHelp === true){
            return <Redirect push to='/StreamFunc/Help'/>
        }

        return(
               
            <div className={'Home'}>
                           
                <div className={'menu'}>
                    <button className={'backButton notBackground'} onClick={() => this.handleHome()}><FaHome size='4em'/></button>
                    <div className={'menuText notBackground'}>Stream</div>
                    <button className={'helpButton notBackground'} onClick={() => this.handleHelp()}><FaQuestion size='4em'/></button>                 
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
