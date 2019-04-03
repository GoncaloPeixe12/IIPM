import React, {Component} from 'react';
import TopMenu from "./TopMenu";
import Hub from './Hub';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';


class Home extends Component {
    render() {
        return(
            <div>
                <TopMenu/>
                <Hub/>
                <Container>
                    <Row>
                        <Col >
                            hey
                        </Col>
                        <Col >
                            oi
                        </Col>
                        <Col>
                            lul
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Home;