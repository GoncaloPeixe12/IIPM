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
        toHelp: false,
        toSettings: false
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

    handleSettings = (user) => {
        this.setState(() => ({
            toSettings: true
        }))
    }

    render(){
        if(this.state.toStream === true){
            return <Redirect push to='/StreamFunc/Stream'/>
        }

        if(this.state.toCall === true){
            return <Redirect push to='/StreamFunc/Call/Contacts'/>
        }

        if(this.state.toHome === true){
            return <Redirect push to='/Home'/>
        }

        if(this.state.toHelp === true){
            return <Redirect push to='/StreamFunc/Help'/>
        }

        if(this.state.toSettings === true){
            return <Redirect push to='/StreamFunc/Settings/stream'/>
        }

        return(
               
            <div className={'Home'} style={{boxSizing: 'border-box'}}>
               
               <video className={'video'} muted loop autoPlay>
                    <source src={'./menuVid.mp4'} type={'video/mp4'}/>
                </video>

                <div className={'menu'}>

                   

                    <button className={'backButton notBackground'} onClick={() => this.handleHome()}><FaHome size='4em'/></button>
                    <div className={'menuText notBackground'}>Stream</div>
                    <button className={'helpButton notBackground'} onClick={() => this.handleHelp()}><FaQuestion size='4em'/></button>                 
                    <div className={'buttonContainer'}>
                        <button className={'roundButton notBackground'} onClick={this.handleCall}><FaPhone size='4em'/></button>
                        <button className={'roundButton rightButton notBackground'} onClick={this.handleStream}><FaVideo size='4em'/></button>
                    </div>
                    <button className={'settingsButton notBackground'} onClick={this.handleSettings}><FaCog size='4em'/></button>
                </div>
            </div>
        )
    }
}

export default StreamMenu;
