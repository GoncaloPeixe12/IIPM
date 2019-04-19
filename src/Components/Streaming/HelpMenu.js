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
            </div>
        )
    }
}
export default HelpMenu;