import React from 'react'

import axios from 'axios';
import { useState, useEffect } from 'react';

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar } from '@material-ui/core';
import './ShowData.css'
const ShowData = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        loadUser()

    }, [])
    const loadUser = async () => {

        const result = await axios.get(" http://localhost:30001/viewdata");
        console.log(result)
        setUser(result.data)
    }
    return (

        <div className='view_page'>
            <Toolbar />
            <TableContainer component={Paper}>
                <Table className="table" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">email</TableCell>
                            <TableCell align="right">Number</TableCell>
                            <TableCell align="right">Gender</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((data, i) => (
                            <TableRow key={data.firstName}>
                                <TableCell component="th" scope="row">{data.selectoption}</TableCell>
                                <TableCell align="right">
                                    {data.firstName}
                                </TableCell>
                                <TableCell align="right">{data.email}</TableCell>
                                <TableCell align="right">{data.number}</TableCell>
                                <TableCell align="right">{data.gender}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>




            {/* {user.map((data, i) => {
                return (
                    <div key={i}>
                        <span>{i + 1}</span> <h1>{data.firstName}</h1>
                    </div>
                )

            })} */}
        </div>
    )
}

export default ShowData
