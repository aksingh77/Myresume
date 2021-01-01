import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
const useStyle = makeStyles((theme) => (
    {
        add_data_heading: {
            paddingBottom: "1rem"
        },
        user_data: {
            width: "36%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            background: "#d6dee7",
            padding: "1rem",
            marginTop: "3rem",
            boxShadow: "1px 1px 11px 0px #645a64",
            [theme.breakpoints.down("xs")]: {
                width: "80%"
            }

            // position: "absolute",
            // left: "50%",
            // top: "50%",
            // transform: "translate(-50%, -50%)",
        },
        form_group: {
            width: "100%",
            // boxSizing: "border-box",
        },
        form_control: {
            width: "100%",
            boxSizing: "border-box",
            height: "3rem",
            marginBottom: "30px",
            outline: "none",
            border: "none",
            paddingLeft: "30px",
            borderRadius: '1rem',
            fontFamily: "monospace",
            fontSize: '1rem',

        },
        user_form: {
            width: "100%",
            // boxSizing: "border-box",
        },
        contactUs_background: {
            background: "#eac8ed",
            height: "100%",
            paddingTop: "4rem",
            fontFamily: "monospace"
        },
        button_control: {
            width: "100%",
            boxSizing: "border-box",
            height: "3rem",
            paddingLeft: "30px",
            borderRadius: '1rem',
            background: "red",
            fontFamily: "monospace",
            color: "#fff",
            border: "none",
            outline: "none",
            fontSize: "1.3rem"
        }

    }
))
const AddCustomForm = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: '',
        email: '',
        phone: '',
        website: ''
    });

    const changeValue = (e) => {
        // console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
        // console.log(e.target.name);
        // setUser(e.target.value);
        // console.log(user)
    }
    const onSubmit = async (e) => {

        e.preventDefault();
        await axios.post('http://localhost:3001/users', user);

        history.push('/contacthome')
    }
    const classes = useStyle()
    return (
        <div className={classes.contactUs_background}>
            <div className={classes.user_data}>
                {/* <Toolbar className={classes.toolbar_class} /> */}
                <h1 className={classes.add_data_heading}>Connect With Us</h1>
                <form onSubmit={onSubmit} className={classes.user_form}>
                    <div className={classes.form_group}>
                        <input type="text" className={classes.form_control} id="exampleInputEmail1" placeholder="Enter Your Name" name="name" onChange={changeValue} value={user.name} />

                    </div>
                    <div className={classes.form_group}>
                        <input type="text" className={classes.form_control} id="exampleInputEmail1" placeholder="Enter Your User Name" name="username" onChange={changeValue} value={user.username} />

                    </div>
                    <div className={classes.form_group}>
                        <input type="email" className={classes.form_control} id="exampleInputEmail1" placeholder="Enter Your Email" name="email" onChange={changeValue} value={user.email} />

                    </div>
                    <div className={classes.form_group}>
                        <input type="tel" className={classes.form_control} id="exampleInputEmail1" placeholder="Enter Your Numebr" name="phone" onChange={changeValue} value={user.phone} />

                    </div>
                    <div className={classes.form_group}>
                        <input type="text" className={classes.form_control} id="exampleInputEmail1" placeholder="Enter Your website" name="website" onChange={changeValue} value={user.website} />

                    </div>

                    <button className={classes.button_control}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddCustomForm
