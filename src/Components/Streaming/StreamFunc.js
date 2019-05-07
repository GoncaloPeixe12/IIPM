import React, { Component } from 'react';
import {FaStop, FaPause, FaPlay, FaCog, FaShare } from 'react-icons/fa';
import '../../style/Streaming/StreamFunc.css';
import '../../style/Streaming/Menu.css';
import {Redirect} from 'react-router-dom';
import funcVid from './funcVid.mp4';

class StreamFunc extends Component{
    static context = {
        router: () => true,
    }
    state = {
        paused: true,
        stopped: true,
        toMenu: false,
        toSettings: false,
        sharing: false,
    }

    handleClick(evt){
        if(this.state.paused === false){
            this.setState(() => ({
                paused: true,
                stopped: false,
            }))
            //document.getElementsByClassName('video')[0].pause();            
        }
        else{
            this.setState(() => ({
                paused: false,
            }))
            //document.getElementsByClassName('video')[0].play();
        }
    }

    handleShare = (user) => {
        this.setState((state) => ({
            sharing: !state.sharing,
        }))
    }

    handleMenu = (user) => {
        this.setState(() => ({
            toMenu: true,
        }))
    }

    handleSettings = (user) => {
        this.setState(() => ({
            toSettings: true,
        }))
    }

    render(){
        
        if(this.state.toMenu === true){
            return(<Redirect push to='/StreamFunc'/>)
        }

        if(this.state.toSettings === true){
            return (<Redirect push to='/StreamFunc/Settings/stream'/>)
        }

        const visible = {
            display: 'inline-block',
        };

        const invisible = {
            display: 'none',
        };


        let play = this.state.paused ? visible : invisible;
        let pause = this.state.paused ? invisible : visible;
        
        let share = this.state.stopped ? invisible : visible;
        
        let cViews = JSON.parse(localStorage.getItem('currViews')) && !this.state.paused ? visible : invisible;
        let tViews = JSON.parse(localStorage.getItem('totalViews')) && !this.state.paused ? visible : invisible;
        return (
            <div className={'Home'}>
                <video className={'video'} autoPlay muted loop>
                    <source src={funcVid} type={'video/mp4'}/>
                </video>
                <div className={'buttonContainer'}>
                    <button className={'roundButton notBackground'} onClick={()=>this.handleClick()}><FaPlay style = {play} size='4em'/><FaPause style={pause} size='4em'/></button>
                    <button className={'roundButton notBackground rightButton'} onClick={this.props.history.goBack}><FaStop size='4em'/></button>  
                      
                </div>
                <div className={'views total'} style={tViews}>Total Views: 23</div>
                <div className={'views current'} style={cViews}>Current Views: 12</div>
                <button className={'settingsButton notBackground'} onClick={()=>this.handleSettings()}><FaCog size='4em'/></button>
            </div>
        )
    }
}
export default StreamFunc;