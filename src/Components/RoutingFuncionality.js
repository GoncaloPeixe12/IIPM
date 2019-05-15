import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/RoutingFuncionality.css';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row";
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
                            <button className={"LargeButton"}>
                                <Link to={'/FuncRouter/1/1'}>Plan</Link>
                            </button>
                        </Col>
                        <Col style={style}>
                            <button className={"LargeButton"}>
                            <Link to={'/FuncRouter/1/2'}>Start Walking!</Link>
                            </button>
                        </Col>
                    </Row>
                    <Row>
                        <div>

                        </div>
                    </Row>
                    <Row>
                        <Col style={style}>
                            <button className={"LargeButton"}>
                                <Link to={'/FuncRouter/1/3'}>: . :</Link>
                            </button>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default RoutingFuncionality;