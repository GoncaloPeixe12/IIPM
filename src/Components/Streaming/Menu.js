import React, { Component } from 'react';
import '../../style/Streaming/Menu.css';
import {FaAngleDoubleLeft, FaCog } from 'react-icons/fa';
import { withRouter } from 'react-router'; 

class Menu extends Component{
    static context = {
        router: () => true,
    }
    
    render(){
        return(
            <div className={'optionsMenu'}>
                <button className={'backButton'} onClick={() => this.props.history.go(-1)}><FaAngleDoubleLeft/></button>
                <div className={'menuText'}>Stream</div>
                <button className={'settingsButton'}><FaCog/></button>
            </div>
        )
    }
}
export default Menu;