import React from 'react'

import { makeStyles } from "@material-ui/core/styles"
import { Link } from 'react-router-dom'
import { Toolbar } from '@material-ui/core'

import "./ButtonHover.css";
const useStyle = makeStyles((theme) => ({
    buttonHover: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#000",
        boxSizing: "border-box",
        minHeight: "100vh"
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        "& a": {
            position: 'relative',
            display: 'inline-block',
            padding: '15px 30px',
            color: "#fff",
            border: "2px solid #0f0",
            margin: "40px",
            textTransform: "uppercase",
            fontWeight: "600",
            textDecoration: "none",
            letterSpacing: "2px",


        }
    }
}))
const ButtonHover = () => {
    const classes = useStyle()
    return (
        <>
            <Toolbar />
            <div className={classes.buttonHover}>

                <div className={`${classes.container} contain`}>
                    <Link className="link_style" to="#"><span>Read More</span></Link>
                    <Link className="link_style" to="#"><span>Read More</span></Link>
                </div>
            </div>
        </>

    )
}

export default ButtonHover
