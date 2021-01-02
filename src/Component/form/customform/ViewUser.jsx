import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { useParams } from 'react-router-dom';

import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({

    viewUser_data_background: {
        background: "#eac8ed",
        height: "100vh",
        paddingTop: "7rem",
        fontFamily: "monospace",
        display: 'flex',

    },

    viewUser_data: {
        width: "calc(100%-30%)",
        height: 400,
        margin: '0 auto',
        background: '#d6dee7',
        padding: '40px',
        boxSizing: 'border-box',
        boxShadow: '1px 1px 11px 0px #645a64',
        [theme.breakpoints.down('xs')]: {
            width: "90%"
        }


    },
    name_header: {
        fontSize: "1.3rem",
        fontWeight: '600',
        paddingBottom: 30
    },
    name_text: {
        fontWeight: '400'
    }
}))
const ViewUser = () => {
    const [user, setUser] = useState({
        name: "",
        username: '',
        email: '',
        phone: '',
        website: ''

    })
    let { id } = useParams();
    useEffect(() => {
        loadUser()
    }, [])
    const loadUser = async () => {
        const result = await axios.get(`https://my-json-server.typicode.com/aksingh77/myresume/users/${id}`);
        // console.log(result)
        setUser(result.data);
    }
    const classes = useStyles();
    return (
        <div className={classes.viewUser_data_background}>
            <div className={classes.viewUser_data}>

                <div className={classes.name_header}>Name: <span className={classes.name_text}>{user.name}</span></div>
                <div className={classes.name_header}>User Name: <span className={classes.name_text}>{user.username}</span></div>
                <div className={classes.name_header}>Email: <span className={classes.name_text}>{user.email}</span></div>
                <div className={classes.name_header}>Phone: <span className={classes.name_text}>{user.phone}</span></div>
                <div className={classes.name_header}>Website: <span className={classes.name_text}>{user.website}</span></div>
            </div>
        </div>
    )
}

export default ViewUser;
