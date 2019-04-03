import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FaHome, FaAngleDoubleLeft } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import '../style/TopMenu.css';

class TopMenu extends Component {
    render() {
        return(
            <div className='container-fluid home'>
                <div className='row'>
                    <div className='col-1'> <Button variant="dark"><FaHome/></Button> </div>
                    <div className='col-1'> <Button variant="dark" ><FaAngleDoubleLeft/></Button> </div>
                    <div className='col '>  </div>
                </div>
            </div>
        )
    }
}
export default TopMenu;