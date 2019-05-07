import React, {Component} from 'react';
import Hub from './Hub';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/Home.css';
import { FaBatteryFull } from 'react-icons/fa';


class Home extends Component {
    render() {

        return(
            <div className={'Home'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <h1 className={'welcome'}>Welcome!</h1>
                        <FaBatteryFull size = '3em' style={{right: '1%', top: '1%', position: 'absolute'}}/>
                    </div>
                </div>
                <Hub/>
            </div>
        )
    }
}
export default Home;