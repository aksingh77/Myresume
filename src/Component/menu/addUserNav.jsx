// import { AppBar, Collapse, Container, List, ListItem, ListItemText, Toolbar, Typography } from '@material-ui/core'
// import React, { useState } from 'react'

// import { makeStyles } from '@material-ui/core/styles';

// import { addUserData } from './menudata';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import { Link } from 'react-router-dom';
// const useStyles = makeStyles(() => ({
//     desktopmenu: {
//         display: 'flex'
//     },
//     desktopmenu_list: {
//         width: 'auto'
//     },
//     title: {
//         flex: '1'
//     },
//     menulink: {
//         color: '#fff'
//     }
// }))


// export const AddUserNav = () => {
//     const [open, setOpen] = useState(false)
//     const classes = useStyles();
//     const handleClick = () => {
//         console.log('clicked')
//         setOpen(!open);
//     };
//     <>
//         <Container>
//             <AppBar>
//                 <Toolbar>
//                     <Typography variant="h6" className={classes.title} >
//                         <Link to="/" className={classes.menulink}>MyResume</Link>
//                     </Typography>
//                     {addUserData.map(({ title, path }, index) => (
//                         <List key={index} className={classes.desktopmenu}>

//                             {musicMenu != null ? (
//                                 <ListItem key={index} onClick={{ musicMenu } && handleClick} className={classes.desktopmenu_list}>
//                                     <ListItemText key={index} primary={title} />

//                                     {open ? <ExpandLess /> : <ExpandMore />}

//                                 </ListItem>
//                             ) : (<ListItem button className={classes.desktopmenu_list}>
//                                 <Link to={path} className={classes.menulink}><ListItemText primary={title} component={Link} to={path} /></Link>
//                             </ListItem>)

//                             }


//                         </List>
//                     ))}
//                 </Toolbar>
//             </AppBar>
//         </Container>
//     </>
// }
