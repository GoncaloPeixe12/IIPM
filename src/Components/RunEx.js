import React, { Component } from 'react';
import iu from '../iu.png';
import '../style/Ex.css';

class RunEx extends Component {
    render() {
        return(
            <div className={"runEx"}>
                <img src={iu} alt={"Runpic"}/>
            </div>
        )
    }
}
export default RunEx;