import React, {Component } from 'react';
import {FaAngleDoubleLeft} from 'react-icons/fa';
import '../../style/Streaming/Menu.css';
import '../../style/Streaming/HelpMenu.css';

class HelpMenu extends Component{
    static context={
        router: () => true,
    }

    render(){
        return(
            <div className={'Home'}>
                <button className={'backButton notBackground'} onClick={this.props.history.goBack}><FaAngleDoubleLeft size='4em'/></button>
                <div className={'menuText notBackground'}>Stream Help</div>
                <div className={'helpContainer'}>
                    <p1 className={'helpText'}> This menu allows for access to both the streaming functionality and the video call functionality</p1>
                    <p1 className={'helpText'}>Clicking on the streaming icon will take you to the streaming screen, from where you can start or stop streaming and access the settings</p1>
                    <p1 className={'helpText'}>Clicking on the call icon will bring you to the contact list, where you can select one or more contacts to start a video call with</p1>
                </div>
            </div>
        )
    }
}
export default HelpMenu;