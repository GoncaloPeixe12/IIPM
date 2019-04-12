import React, { Component } from 'react';
import '../../style/Streaming/Menu.css';
import {FaAngleDoubleLeft } from 'react-icons/fa';
import {Link, } from 'react-router-dom';

class Menu extends Component{
    static context = {
        router: () => true,
    }
    
    render(){
        return(
            <div className={'optionsMenu'}>
                <button><FaAngleDoubleLeft/></button>
            </div>
        )
    }
}
export default Menu;