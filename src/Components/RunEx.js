import React, { Component } from 'react';
import runpic from '../runpic.png';
import '../style/Ex.css';

class RunEx extends Component {
    render() {
        return(
            <div>
                <img src={runpic} alt={"Runpic"}/>
            </div>
        )
    }
}
export default RunEx;