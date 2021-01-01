import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import './FormStyle.css';
const HomeContactModuleForm = () => {
    const [usee, setUsee] = useState([]);
    useEffect(() => {

        loadUsers()
    }, [])
    const loadUsers = async () => {
        const result = await axios.get('http://localhost:3001/users');
        setUsee(result.data)
    }
    const deleteDataa = async (id) => {
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUsers()

    }
    return (
        <div className="contact_table_data">
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
                    {usee.map((user, index) => (
                        <tr key={index + 1}>
                            <th scope="row">{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td><Link to={`/user/view/${user.id}`}><VisibilityIcon color="primary" /></Link>
                                <Link to={`/user/edit/${user.id}`}><EditIcon /></Link>
                                <Link onClick={() => deleteDataa(user.id)}><DeleteIcon color="secondary" /></Link>
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    )
}

export default HomeContactModuleForm
