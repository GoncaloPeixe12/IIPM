import React, {Component} from 'react';
import '../style/Home.css';

class MainOptions extends Component {
    render() {
        return (
            <div className={"grid-container Home"}>
                <div>Settings</div>
                <div>Themes</div>
                <div>Security</div>
                <div>About This App</div>
            </div>
        )
    }
}
export default MainOptions