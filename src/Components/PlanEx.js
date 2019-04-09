import React, { Component } from 'react';
import runpic from '../runpic.png';
import '../style/Ex.css';
import SearchBar from './SearchBar';

class PlanEx extends Component {
    render() {
        return(
            <div className={'ex'}>
                <SearchBar/>
                <img src={runpic} alt={"Runpic"}/>
            </div>
        )
    }
}
export default PlanEx;