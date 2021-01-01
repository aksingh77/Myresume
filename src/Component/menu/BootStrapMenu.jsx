import React, { useState } from 'react'

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import menu from './menudata';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
const BootStrapMenu = () => {
    const [open, setOpen] = useState(false)
    // const classes = useStyles();
    const handleClick = () => {

        setOpen(!open);
    };
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        {menu.map(({ title, musicMenu }, index) => (
                            <Nav key={index}  >
                                <Nav.link >
                                    <NavDropdown.Item key={index} >{title}</NavDropdown.Item>
                                </Nav.link>
                            </Nav>
                        )





                        )}



                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default BootStrapMenu
