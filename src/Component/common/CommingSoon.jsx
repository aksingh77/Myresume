import React from 'react'

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';

import cardImage from '../../../src/img/construction.jpg';
const useStyle = makeStyles((theme) => ({
    comming_soon_section: {
        boxSizing: 'border-box',
        height: '100vh',
        background: "#bbc9f8"
    },
    comming_soon_body: {
        width: "calc(100% - 30%)",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-45%)",
        padding: 30,
        boxSizing: "border-box",
        background: "#fff",
        boxShadow: "0 1.2rem 3rem rgba(0, 0, 0, 0.2)"
    },
    card_media_image: {
        width: "100%",
        height: "100%"
    },
    grid_contain: {
        [theme.breakpoints.down('sm')]: {
            flexDirection: " column-reverse"
        }
    },
    grid_padding: {
        position: 'absolute',
        top: '50%',
        transform: "translate(0,-50%)",
        [theme.breakpoints.down('sm')]: {
            position: 'relative',
            textAlign: 'center',
            transform: "unset",
            top: "0"
        },

    },
    headingone: {
        fontSize: '4rem',
        fontWeight: '600',
        [theme.breakpoints.down('xs')]: {
            fontSize: '3rem'
        }
    },
    headingconstruction: {
        fontSize: '1.8rem',
        fontWeight: '600',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem'
        }
    }
}))


const CommingSoon = () => {
    const classes = useStyle()
    return (
        <div className={classes.comming_soon_section}>

            <div className={classes.comming_soon_body}>
                <Grid container className={classes.grid_contain} spacing={4}>
                    <Grid item md={4} sm={12}>
                        <Grid className={classes.grid_padding}>
                            <Typography className={classes.headingone}>OOPS!</Typography>
                            <Typography className={classes.headingconstruction}>Under Construction</Typography>
                        </Grid>
                    </Grid>
                    <Grid item md={8} sm={12}>
                        <img alt="under construction" className={classes.card_media_image} src={cardImage}></img>
                        {/* <CardMedia className={classes.card_media_image} image={cardImage} title="under construction" /> */}
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default CommingSoon
