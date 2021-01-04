import React from 'react';

import './Detail.css';

const Detail = ({ icon, data, link }) => {
    // console.log(id)
    return (
        <a href={link}>
            <div className="detail">
                <div className="detail_icon">
                    {icon}
                </div>
                <div className="detail_data">
                    {data}
                </div>
            </div>
        </a>
    )
}
export default Detail;