import React, {Component} from 'react';
import '../../style/Streaming/StreamFuncSettings.css';

class StreamSettings extends Component{
    render(){
        return(
            <div className={'settingsContainer'}>
                <div className={'settingOpt'}><div className={'settingCategory'}>cat1</div></div>
                <div className={'settingOpt'}><div className={'settingText'}>op1</div></div>
                <div className={'settingOpt'}><div className={'settingText'}>op2</div></div>
                <div className={'settingOpt'}><div className={'settingText'}>op3</div></div>
                <div className={'settingOpt'}><div className={'settingCategory'}>cat2</div></div>
                <div className={'settingOpt'}><div className={'settingText'}>op4</div></div>
                <div className={'settingOpt'}><div className={'settingText'}>op5</div></div>
                <div className={'settingOpt'}><div className={'settingCategory'}>cat3</div></div>
                <div className={'settingOpt'}><div className={'settingText'}>op6</div></div>
                <div className={'settingOpt'}><div className={'settingText'}>op7</div></div>
            </div>
        )
    }
}
export default StreamSettings;