import React, {Component} from 'react';
import '../style/Home.css';
import '../style/MainOptions.css';


class MainOptions extends Component {
    render() {
        return (
            <div className={"Home"}>
                <div className={'optionsTab'}>
                    <div className={"opt"}>Settings</div>
                    <div className={"opt"}>Themes</div>
                    <div className={"opt"}>Security</div>
                    <div className={"opt"}>About</div>
                </div>
                <div className={'options'}>
                    <div className={'tabItem'}>
                    </div>
                    <div className={'tabItem'}>
                    </div>
                    <div className={'tabItem'}>
                    </div>
                    <div className={'tabItem'}>
                    </div>
                </div>

                
            </div>
        )
    }
}
export default MainOptions