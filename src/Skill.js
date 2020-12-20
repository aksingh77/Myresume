import React from 'react';

const Skill = ({ icon, data }) => {
    // console.log(icon, data);
    return (
        <div className="skill">
            <div className="new_detail">
                <i className={icon}></i>
                <p className="new_data">{data}</p>
            </div>
        </div>
    )
}
export default Skill;