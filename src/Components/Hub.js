import Carousel from 'react-bootstrap/Carousel';
import React, {Component} from 'react';
import {FaRegSun, FaRunning, FaCamera} from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Hub extends Component {
    render() {
        const style = {
            backgroundColor: '#3a79e0',
        };

        return(
            <div className={'ponto1'} style={style}>
                <Carousel interval={null} indicators={false}>
                    <Carousel.Item>
                        <div><FaRegSun size='5em'/></div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div><Link to={'FuncRouter/1'}><FaRunning size='5em'/></Link></div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div><FaCamera size='5em'/></div>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Hub;