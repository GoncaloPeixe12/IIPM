import React, { Component } from 'react';
import runpic from '../runpic.png';
import '../style/Ex.css';

class PlanEx extends Component {
    render() {
        return(
            <div className={'ex'}>
                <img src={runpic} alt={"Runpic"}/>
            </div>
        )
    }
}
export default PlanEx;