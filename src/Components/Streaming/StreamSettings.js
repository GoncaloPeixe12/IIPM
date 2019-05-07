import React, {Component} from 'react';
import '../../style/Streaming/StreamFuncSettings.css';
import {FaAngleDown, FaAngleUp} from 'react-icons/fa';

class StreamSettings extends Component{
    state = {
        quality: JSON.parse(localStorage.getItem('quality')) || '0',
        currViews : JSON.parse(localStorage.getItem('currViews')),
        totalViews: JSON.parse(localStorage.getItem('totalViews')),
        friendsOnly: JSON.parse(localStorage.getItem('friendsOnly')),
        locSharing: JSON.parse(localStorage.getItem('locSharing'))
    }

    handleCurrViews = (user) => {
        this.setState((state) => ({
            currViews: !state.currViews,
        }))
        localStorage.setItem('currViews', JSON.stringify(!this.state.currViews))
    }

    handleQuality = (user, qlty) => {
        this.setState(() => ({
            quality: qlty
        }))
        localStorage.setItem('quality', JSON.stringify(qlty))
    }

    handleTotalViews = (user) => {
        this.setState((state) => ({
            totalViews: !state.totalViews
        }))
        localStorage.setItem('totalViews', JSON.stringify(!this.state.totalViews))
    }

    handleFriendsOnly = (evnt) => {
        this.setState((state) => ({
            friendsOnly: !state.friendsOnly
        }))
        localStorage.setItem('friendsOnly', JSON.stringify(!this.state.friendsOnly))
    }

    handleShareLoc = (evnt) => {
        this.setState((state) => ({
            locSharing: !state.locSharing
        }))
        localStorage.setItem('locSharing', JSON.stringify(!this.state.locSharing))
    }

    render(){
        const cViewsCheck = this.state.currViews === true ? "checked" : "";
        const tViewsCheck = this.state.totalViews === true ? "checked" : "";
        const fOnlyCheck = this.state.friendsOnly === true ? "checked" : "";
        const lShareCheck = this.state.locSharing === true ? "checked" : "";

        var currentItem = 1;

        function showItem(n){
            var i;
            var slides = document.getElementsByClassName("Item");
            if (n > slides.length - 5) {currentItem = slides.length - 5}
            if (n < 1) {currentItem = 1}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = currentItem; i < currentItem + 6; i++){
                slides[i-1].style.display = "table";
            }
        }

        function changeItem(n){
            showItem(currentItem += n);
        }

        return(
            
            <div className={'settingsContainer'}>
                <div className={'sideBar'} style={{height:'100%', top:'0'}}>
                    <button className={'sideButton'} style={{padding:'0', textAlign: 'center'}} onClick={(e) => changeItem(-1, e)}><FaAngleUp size='4em'/></button>
                    <button className={'sideButton'} style={{padding:'0', textAlign: 'center'}} onClick={(e) => changeItem(1, e)}><FaAngleDown size='4em'/></button>
                </div>
                <div className={'list'} style={{height: '100%'}}>
                    <div className={'Item settingOpt'}><div className={'settingCategory'}>Stream Quality</div></div>
                    <div className={'Item settingOpt'}><div className={'settingText'}>Recording quality</div>   
                        <select className={'dropdown'} size={'2'} value={this.state.quality} style={{width:'40%'}}>
                            <option style={{height: '100%'}} value={'0'}>Select Quality</option>
                            <option style={{height: '100%'}} value={'144'} onClick={(e) => this.handleQuality(e, '144')}>144p</option>
                            <option style={{height: '100%'}} value={'240'} onClick={(e) => this.handleQuality(e, '240')}>240p</option>
                            <option style={{height: '100%'}} value={'360'} onClick={(e) => this.handleQuality(e, '360')}>360p</option>
                            <option style={{height: '100%'}} value={'480'} onClick={(e) => this.handleQuality(e, '480')}>480p</option>
                            <option style={{height: '100%'}} value={'720'} onClick={(e) => this.handleQuality(e, '720')}>720p</option>
                            <option style={{height: '100%'}} value={'1080'} onClick={(e) => this.handleQuality(e, '1080')}>1080p</option>
                            <option style={{height: '100%'}} value={'1440'} onClick={(e) => this.handleQuality(e, '1440')}>1440p (2K)</option>
                            <option style={{height: '100%'}} value={'2160'} onClick={(e) => this.handleQuality(e, '2160')}>2160p (4k)</option>
                            <option style={{height: '100%'}} value={'4320'} onClick={(e) => this.handleQuality(e, '4320')}>4320p (8k)</option>
                        </select></div>

                    <div className={'Item settingOpt'}><div className={'settingCategory'}>Notifications</div></div>
                    <div className={'Item settingOpt'}><div className={'settingText'}>Show current viewers</div><input type={'checkbox'} checked={cViewsCheck} className={'settingBox'} onChange={(e) => this.handleCurrViews()}></input></div>
                    <div className={'Item settingOpt'}><div className={'settingText'}>Show total viewers</div><input type={'checkbox'} checked={tViewsCheck} className={'settingBox'} onChange={(e) => this.handleTotalViews()}></input></div>

                    <div className={'Item settingOpt'}><div className={'settingCategory'}>Security</div></div>
                    <div className={'Item settingOpt'}><div className={'settingText'}>Make stream for friends only</div><input type={'checkbox'} checked={fOnlyCheck} className={'settingBox'} onChange={(e) => this.handleFriendsOnly()}></input></div>
                    <div className={'Item settingOpt'}><div className={'settingText'}>Allow location sharing</div><input type={'checkbox'} checked={lShareCheck} className={'settingBox'} onChange={(e) => this.handleShareLoc()}></input></div>
                </div>
            </div>
        )
    }
}
export default StreamSettings;