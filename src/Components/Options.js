import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Options extends Component {
    render() {
        return(
            <div className={'container-fluid'}>
                <div className={'row'}>Option1</div>
                <div className={'row'}>Option2</div>
                <div className={'row'}>Option3</div>
                <div className={'row'}>Option4</div>
                <div className={'row'}>Option5</div>
            </div>
        )
    }
}

export default Options;