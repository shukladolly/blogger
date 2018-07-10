import React, {Component} from 'react';
import LeftNavigation from "./LeftNav/Leftnavigation";
import Header from './header';
import {Router} from './router';
import './main.css';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarVisible: false
        };
    }
    render() {
        let {sidebarVisible} = this.state;
        return (
            <div className='main-page'>
                {sidebarVisible && <LeftNavigation />}
                <div className="right-section">
                    <Header toggleSidebar={this.toggleSidebar}/>
                    <Router />
                </div>
            </div>
        );
    }
    toggleSidebar = () => {
        this.setState({
            sidebarVisible: !this.state.sidebarVisible
        });
    };
}