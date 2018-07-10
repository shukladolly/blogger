import React from 'react';
import FontAwesome from 'react-fontawesome';

export default ({toggleSidebar}) => (
    <div className='heading-section-dashboard'>
        <div className='top-sub-row'>
            <span className='hamburger col-md-1'
                  onClick={toggleSidebar}>
                <FontAwesome name='bars' />
            </span>
            <div className="sub-label-head">
                <a className='logout-button'>Logout</a>
                <a className='logout-button'>Profile</a>
            </div>
            <div className="clear"></div>
        </div>
        <div className="header">Patient Dashboard</div>
        <div className="clear"></div>
    </div>
);