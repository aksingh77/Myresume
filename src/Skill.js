import React from 'react';
import { Link } from 'react-router-dom';

const Skill = ({ icon, data, link }) => {
    // console.log(icon, data);
    return (
        <Link to={link}>
            <div className="skill">
                <div className="new_detail">
                    <i className={icon}></i>
                    <p className="new_data">{data}</p>
                </div>
            </div>
        </Link>
    )
}
export default Skill;