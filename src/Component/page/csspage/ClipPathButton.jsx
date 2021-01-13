import { Toolbar } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

import "./ClipPathButton.css";
const ClipPathButton = () => {
    return (
        <div>
            <Toolbar />
            <div className="clippathbutton">

                <Link className="anchortag" to="">
                    <span>Button</span>
                    <span>Button</span>
                </Link>
            </div>
        </div>
    )
}

export default ClipPathButton
