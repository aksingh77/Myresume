import React from 'react';
import { Link } from 'react-router-dom';

import './Hobbies.css';

const Hobbies = () => {

    return (
        <div className="hobbies_detal">
            <div className="hobbies">
                <i className="fas fa-book"></i>
                <p>reading</p>
            </div>
            <div className="hobbies">
                <i className="fas fa-music"></i>
                <p><Link to="/music"> music</Link></p>
            </div>
            <div className="hobbies">
                <i className="fas fa-futbol"></i>
                <p>footbal</p>
            </div>
            <div className="hobbies">
                <i className="fas fa-gamepad"></i>
                <p>gaming</p>
            </div>
        </div>
    )
}
export default Hobbies;