import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import '../muduleform/FormStyle.css'
import { Toolbar } from '@material-ui/core';
const ContactHome = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);
    const loadUsers = async () => {
        const result = await axios.get('http://localhost:3001/users');
        setUsers(result.data);
    }
    const deleteData = async (id) => {
        console.log(id);
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUsers()
    }
    return (
        <div className="contact_table_data">
            <Toolbar />

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr>
                            <th key={index + 1} scope="row">{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td><Link to={`/user/view/${user.id}`}><VisibilityIcon color="primary" /></Link>
                                <Link to={`/user/edit/${user.id}`}><EditIcon /></Link>
                                <Link onClick={() => deleteData(user.id)}><DeleteIcon color="secondary" /></Link>
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    )
}

export default ContactHome;
