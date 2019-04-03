import Carousel from 'react-bootstrap/Carousel';
import React, {Component} from 'react';

class Hub extends Component {
    render() {
        return(
            <div className={'ponto1'}>
                <Carousel interval={null} indicators={false}>
                    <Carousel.Item>
                        <div > lelitos</div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div > lolitos</div>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Hub;