import Carousel from 'react-bootstrap/Carousel';
import React, {Component} from 'react';
import {FaRegSun, FaRunning, FaCamera} from 'react-icons/fa';

class Hub extends Component {
    render() {
        return(
            <div className={'ponto1'}>
                <Carousel interval={null} indicators={false}>
                    <Carousel.Item>
                        <div ><FaRegSun size='5em'/></div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div ><FaRunning size='5em'/></div>
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