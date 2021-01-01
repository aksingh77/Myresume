import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => {
    // tittle: {
    //     padding: theme.spacing(3);

    // }

})
const ContactNav = () => {
    const classess = useStyle();
    return (
        <div>

            <AppBar>
                <Toolbar>
                    <Typography style={{ flexGrow: 1 }} variant="h6" className={classess.title}>
                        MyCrud
                   </Typography>
                    <div className={classess.content_hading} >
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        <Button color="inherit" component={Link} to="/contacthome">View Data</Button>
                        <Button color="inherit" component={Link} to="/user/add">Add User</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default ContactNav;

