import React, {Component} from 'react';
import {FaRegSun, FaRunning, FaCamera} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../style/Hub.css';

class Hub extends Component {
    render() {
        var currentItem = 1;

        function showItem(n){
            var i;
            var slides = document.getElementsByClassName("carousel_item");
            if (n > slides.length) {currentItem = 1}
            if (n < 1) {currentItem = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[currentItem-1].style.display = "block";
        }

        function changeItem(n){
            showItem(currentItem += n);
        }

        return(
            
            <div className={'carousel'}>
                <div className={'carousel_item'} style={{display: 'block'}}>
                    <div><Link to={'/Home/Options/'}><FaRegSun className={'icon'} size='5em'/></Link></div>
                </div>
                <div className={'carousel_item'}>
                    <div><Link to={'FuncRouter/1'}><FaRunning className={'icon'} size='5em'/></Link></div>
                </div>
                <div className={'carousel_item'}>
                    <div><Link to={''}><FaCamera className={'icon'} size='5em'/></Link></div>
                </div>
                // eslint-disable-next-line
                <a className="prev" onClick={(e) => changeItem(-1, e)}>&#10094;</a>
                // eslint-disable-next-line
                <a className="next" onClick={(e) => changeItem(1 ,e)}>&#10095;</a>
            </div>
        )
    }
}

export default Hub;