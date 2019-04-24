import React, {Component} from 'react';
import {FaAngleDoubleLeft} from 'react-icons/fa';
import '../../style/Streaming/Menu.css';
import '../../style/Home.css';
import '../../style/Streaming/StreamFuncSettings.css';
import StreamSettings from './StreamSettings.js';
import CallSettings from './CallOptions.js';

class StreamFuncSettings extends Component{
    static context={
        router: () => true,
    }

    state = {
        stream: false,
        call: false
    }

    handleStream = (user) => {
        this.setState(() => ({
            call: false,
            stream: true
        }))

        this.props.match.params.id = '';
    }

    handleCall = (user) => {
        this.setState(() => ({
            call: true,
            stream: false
        }))
        this.props.match.params.id = '';
    }



    render(){
        if(this.state.stream === true || this.props.match.params.id === 'stream'){

            return(
                <div className={'Home'}>
                    <button className={'backButton notBackground'} onClick={this.props.history.goBack}><FaAngleDoubleLeft size='4em'/></button>
                    <div className={'menuText notBackground'} style={{width: '50%'}}>Stream Settings</div>
                    <div className={'optsBar'}>
                        <button className={'sideTag'} style={{borderBottom: '1px solid black', backgroundColor: 'black', color: 'white'}} onClick={this.handleStream}>Stream</button>
                        <button className={'sideTag'} style={{borderTop: '1px solid black'}} onClick={this.handleCall}>Call</button>
                    </div>
                    <StreamSettings/>
                </div>
            )
        } else{
            return(
                <div className={'Home'}>
                    <button className={'backButton notBackground'} onClick={this.props.history.goBack}><FaAngleDoubleLeft size='4em'/></button>
                    <div className={'menuText notBackground'} style={{width: '50%'}}>Stream Settings</div>
                    <div className={'optsBar'}>
                        <button className={'sideTag'} style={{borderBottom: '1px solid black'}} onClick={this.handleStream}>Stream</button>
                        <button className={'sideTag'} style={{borderTop: '1px solid black', backgroundColor: 'black', color: 'white'}} onClick={this.handleCall}>Call</button>
                    </div>
                    <CallSettings/>
                </div>
            )
        }
    }
}
export default StreamFuncSettings;