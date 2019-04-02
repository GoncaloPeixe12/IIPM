import React, { Component } from 'react';
import './style/App.css';
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.css';
import { FaHome, FaAngleDoubleLeft } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import StreamFuncionality from './StreamFuncionality';

class App extends Component {
  render() {
    const divStyle = {
      backgroundColor: 'black',
      height: '40px',
    };
    const divStyle1 = {
      backgroundColor: 'black',
    };


    return (

        <div>
          <div className='container-fluid home'>
            <div className='row'>
              <div className='col-1'> <FaHome/> </div>
              <div className='col-1'> <FaAngleDoubleLeft/> </div>
              <div className='col barbecue'>  </div>
            </div>
          </div>
          <Hub/>
          <Container>
            <Row>
              <Col style={divStyle}>
                hey
              </Col>
              <Col style={divStyle1}>
                oi
              </Col>
              <Col>
                lul
              </Col>
            </Row>
          </Container>
            <StreamFuncionality/>
        </div>
    );
  }
}

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


export default App;
