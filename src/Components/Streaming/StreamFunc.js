import React, { Component } from 'react';
import {FaStop, FaPause, FaPlay, FaCog } from 'react-icons/fa';
import '../../style/Streaming/StreamFunc.css';
import {Redirect} from 'react-router-dom';

class StreamFunc extends Component{
    state = {
        paused: true,
        toMenu: false,
        toSettings: false,
    }

    handleClick(evt){
        if(this.state.paused === false){
            this.setState(() => ({
                paused: true,
            }))
            document.getElementsByClassName('video').pause();            
        }
        else{
            this.setState(() => ({
                paused: false,
            }))
            document.getElementsByClassName('video').play();
        }
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
        


        return (
            <div className={'Home'}>
                <video className={'video'} muted loop>
                    <source src={'./funcVid.mp4'} type={'video/mp4'}/>
                </video>
                <div className={'buttonContainer streamButtonCont'}>
                    <button className={'streamButton'} onClick={()=>this.handleClick()}><FaPlay style = {play} size='4em'/><FaPause style={pause} size='4em'/></button>
                    <button className={'streamButton'} onClick={()=>this.handleMenu()}><FaStop size='4em'/></button>  
                    <button className={'streamButton'} onClick={()=>this.handleSettings()}><FaCog size='4em'/></button>  
                </div>
            </div>
        )
    }
}
export default StreamFunc;