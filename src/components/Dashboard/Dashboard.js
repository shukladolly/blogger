import React from 'react';
import Chart from '../charts/Chart';
import "./dashboard.css"
import {  barLineChartConfigBP, lineChartConfigHeartrate, bloodComponents, urineComponents  } from "../../dummyData/dummyDataStore";

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className='chart-area'>
                <div className="">
                    <div className='col-md-6 blood-preasure'> <Chart  config={barLineChartConfigBP}/> </div>
                    <div className='col-md-6 pulse'> <Chart  config={lineChartConfigHeartrate}/> </div>
                </div>
                <div className=''>
                    <div className='col-md-6 blood-componsition'> <Chart  config={bloodComponents}/> </div>
                    <div className='col-md-6 urine-composition'> <Chart  config={urineComponents}/> </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;