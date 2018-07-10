import React from 'react';
import './reporting.css';

const Reporting = () => {
    return (
        <div className='reporting'>
            <a href={"/api/healthReport"} target="_blank">
                <button className="download-report-button">Download Report</button>
            </a>
        </div>
    );
}

export default Reporting;