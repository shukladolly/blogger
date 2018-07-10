import React from 'react';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import './leftnav.css';
import {routeConfig} from '../router';

const  LeftNavigation = () => {
    let pathName = window.location.pathname;
    return (
        <div className='left-navigation col-md-2'>
            <div className='row head-left-nav'>
                <div><span className="minus">{'- '}</span>Board</div>
            </div>
            <ul className='navigation-list row'>
                {routeConfig.map((entry,index)=>{
                    let isActive = false;
                    if(pathName === entry.route) {
                        isActive = true
                    }
                    return (
                        <li key={index} className={'nav-entry ' + (isActive ? "active": "")}>
                            <i className={entry.icon}><FontAwesome name={entry.icon} /> </i>
                            <Link to={entry.route}>{entry.label}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default LeftNavigation;