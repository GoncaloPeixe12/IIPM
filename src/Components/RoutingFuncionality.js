import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/RoutingFuncionality.css';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';

class RoutingFuncionality extends Component{
    render() {

        const style = {
            textAlign: 'center',
        };
        const containerStyle = {
            marginTop: '200px',
            width: '400px'
        };

        return(
            <div>
                <Container style={containerStyle}>
                    <Row>
                        <Col style={style}>
                            <Button variant={'dark'} size={'lg'}>Plan</Button>
                        </Col>
                        <Col style={style}>
                            <Button variant={'dark'} size={'lg'}>Start Walking!</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={style}>
                            <Button variant={'dark'} size={'lg'}>:.:</Button>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default RoutingFuncionality;