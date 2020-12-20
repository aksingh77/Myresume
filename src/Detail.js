import React from 'react';

import './Detail.css';

const Detail = ({ icon, data }) => {

    return (
        <div className="detail">
            <div className="detail_icon">
                {icon}
            </div>
            <div className="detail_data">
                {data}
            </div>
        </div>
    )
}
export default Detail;