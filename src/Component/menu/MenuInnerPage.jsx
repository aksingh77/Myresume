import { AppBar, Container, Hidden, IconButton, List, ListItem, ListItemText, SwipeableDrawer, Toolbar, Typography } from '@material-ui/core';

import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";

import menu, { addUserData, userData } from './menudata'
import MenuIcon from '@material-ui/icons/Menu';
import DesktopMenu, { AddUserNav, UserNav } from './DesktopMenu';
import { Link } from 'react-router-dom';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: "1"

    },
    drawer: {
        width: drawerWidth,
    },

    navNewBar: {
        display: `flex`,
        justifyContent: `space-between`,
        [theme.breakpoints.down('xs')]: {
            flexDirection: `column`,
            justifyContent: `unset`,
            width: 240
        }
    }

}))



const MenuInnerPage = () => {

    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const your = () => {
        setOpen(true)
    }
    // const listMenu = (e) => (
    //     <>
    //         <ListItem button onClick={() => setOpen(false)}> <ListItemText primary={e.title} /> </ListItem>

    //     </>

    // )

    return (
        <Container>
            <AppBar>
                <Toolbar>
                    <Hidden smUp >
                        <IconButton color="inherit" onClick={your}>
                            <MenuIcon />
                        </IconButton>
                        <SwipeableDrawer className={classes.drawer} onOpen={() => setOpen(true)} open={open} onClose={() => setOpen(false)}>
                            <List className={classes.navNewBar}>
                                {menu.map(({ title, path }, i) => (
                                    <ListItem key={i} button onClick={() => setOpen(false)} component={Link} to={path}> <ListItemText primary={title} /> </ListItem>
                                ))}
                            </List>
                            {/* <DesktopMenu className={classes.drawer} /> */}
                        </SwipeableDrawer>
                    </Hidden>
                    <Typography variant="h6" className={classes.title} >

                        MyResume
                    </Typography>

                    <Hidden xsDown >

                        {/* <List className={classes.navNewBar}>
                            {menu.map(({ title }, i) => (
                                <ListItem className={classes.bar} key={i} button> <ListItemText primary={title} /> </ListItem>
                            ))} */}
                        {/* {menu.map(listMenu)} */}
                        {/* </List> */}
                        {/* <DesktopMenu /> */}
                        <DesktopMenu />
                    </Hidden>
                </Toolbar>
            </AppBar>
        </Container>
    )
}

export default MenuInnerPage;


export const MenuViewPage = () => {

    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const your = () => {
        setOpen(true)
    }

    return (
        <Container>
            <AppBar>
                <Toolbar>
                    <Hidden smUp >
                        <IconButton color="inherit" onClick={your}>
                            <MenuIcon />
                        </IconButton>
                        <SwipeableDrawer className={classes.drawer} onOpen={() => setOpen(true)} open={open} onClose={() => setOpen(false)}>
                            <List className={classes.navNewBar}>
                                {addUserData.map(({ title, path }, i) => (
                                    <ListItem key={i} button onClick={() => setOpen(false)} component={Link} to={path}> <ListItemText primary={title} /> </ListItem>
                                ))}
                            </List>

                        </SwipeableDrawer>
                    </Hidden>
                    <Typography variant="h6" className={classes.title} >

                        MyResume
                    </Typography>

                    <Hidden xsDown >
                        <AddUserNav />
                    </Hidden>
                </Toolbar>
            </AppBar>
        </Container>
    )
}


export const MenuAddPage = () => {

    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const your = () => {
        setOpen(true)
    }

    return (
        <Container>
            <AppBar>
                <Toolbar>
                    <Hidden smUp >
                        <IconButton color="inherit" onClick={your}>
                            <MenuIcon />
                        </IconButton>
                        <SwipeableDrawer className={classes.drawer} onOpen={() => setOpen(true)} open={open} onClose={() => setOpen(false)}>
                            <List className={classes.navNewBar}>
                                {userData.map(({ title, path }, i) => (
                                    <ListItem key={i} button onClick={() => setOpen(false)} component={Link} to={path}> <ListItemText primary={title} /> </ListItem>
                                ))}
                            </List>

                        </SwipeableDrawer>
                    </Hidden>
                    <Typography variant="h6" className={classes.title} >

                        MyResume
                    </Typography>

                    <Hidden xsDown >
                        <UserNav />
                    </Hidden>
                </Toolbar>
            </AppBar>
        </Container>
    )
} 