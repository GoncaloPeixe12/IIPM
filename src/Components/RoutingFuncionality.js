import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/RoutingFuncionality.css';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import "../style/Buttons.css";

class RoutingFuncionality extends Component{
    render() {

        const style = {
            textAlign: 'center',
            marginTop: '50px'
        };
        const containerStyle = {
            marginTop: 'auto',
            width: '100%',
            height: '300px'
        };
        // para o Duarte, Container "gots" to go transferir para CSS
        return(
            <div>
                <Container style={containerStyle}>
                    <Row>
                        <Col style={style}>
                            <Link to={'/FuncRouter/1/1'}>
                                <Button className={"LargeButton"}>
                                    Plan
                                </Button>
                            </Link>
                        </Col>
                        <Col style={style}>
                            <Link to={'/FuncRouter/1/2'}>
                                <Button className={"LargeButton"}>
                                Start Walking!
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <div>

                        </div>
                    </Row>
                    <Row>
                        <Col style={style}>
                            <Link to={'/FuncRouter/1/3'}>
                                <Button className={"LargeButton"}>
                                    Options
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default RoutingFuncionality;