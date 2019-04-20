import React, { Component } from 'react';
import {FaPhone, FaAngleDoubleLeft, FaAngleDown, FaAngleUp} from 'react-icons/fa';
import '../../style/Streaming/ContactList.css';
import '../../style/Streaming/Menu.css';
import {Redirect} from 'react-router-dom';


class ContactList extends Component{
    static context = {
        router: () => true,
    }

    state = {
        toCall: false
    }

    handleCall = (user) => {
        this.setState(() => ({
            toCall: true
        }))
    }

    toggleSelect = (user) => {
        
    }

    render(){

        var currentItem = 1;

        function showItem(n){
            var i;
            var slides = document.getElementsByClassName("listItem");
            if (n > slides.length - 2) {currentItem = slides.length - 2}
            if (n < 1) {currentItem = 1}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = currentItem; i < currentItem + 3; i++){
                slides[i-1].style.display = "block";
            }
            
            

        }

        function changeItem(n){
            showItem(currentItem += n);
        }

        if( this.state.toCall === true){
            return <Redirect push to='/StreamFunc/Call'/>
        }

        return(
            <div className={'Home'}>
                <button className={'backButton notBackground'} onClick={this.props.history.goBack}><FaAngleDoubleLeft size='4em'/></button>
                <div className={'menuText notBackground'}>Contacts</div>
                <div className={'sideBar'}>
                    <button className={'sideButton'} onClick={(e) => changeItem(-1, e)}><FaAngleUp size='4em'/></button>
                    <button className={'sideButton'} onClick={(e) => changeItem(1, e)}><FaAngleDown size='4em'/></button>
                </div>
                <div className={'list'}>
                    <div className={'listItem'} style={{display: 'block'}} onClick={this.toggleSelect()}>Alice</div>
                    <div className={'listItem'} style={{display: 'block'}} onClick={this.toggleSelect()}>Bob</div>
                    <div className={'listItem'} style={{display: 'block'}} onClick={this.toggleSelect()}>Charles</div>
                    <div className={'listItem'} style={{display: 'none'}} onClick={this.toggleSelect()}>David</div>
                    <div className={'listItem'} style={{display: 'none'}} onClick={this.toggleSelect()}>Ethan</div>

                </div>
                <button className={'callButton notBackground'} onClick={() => this.handleCall()}><FaPhone size='4em'/></button>
            </div>
        )
    }
}
export default ContactList