import React, {Component} from 'react';
import Hub from './Hub';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/Home.css';


class Home extends Component {
    render() {
        return(
            <div className={'Home'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <h1>Welcome!</h1>
                    </div>
                </div>
                <Hub/>
            </div>
        )
    }
}
export default Home;