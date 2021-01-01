import React, { useEffect } from 'react'

import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
const EditContactForm = () => {
    let { id } = useParams();
    let history = useHistory();
    const { register, errors, handleSubmit } = useForm({
        mode: 'onTouched',

    });
    useEffect(() => {
        loadUser();
        // console.log(user);
    }, [])
    const onSubmit = async (data) => {
        await axios.put(`http://localhost:3001/users/${id}`, data);
        history.push('/contacthome');
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`);
        console.log(result);
        // const tt = result.data
        // // const waht = await watch()

        // // await setValue(tt)
    }
    return (
        <div>
            <div className="module_form_section">
                <div className="module_form_container">
                    <p className="module_form_title">Connect With Us</p>
                    <form className="module_from" onSubmit={handleSubmit(onSubmit)}>
                        <div className="module_form_input">
                            <input type="text" name="name"

                                ref={register({
                                    required: "This field is required",
                                    minLength: {
                                        value: 4,
                                        message: "Enter at least four characters"
                                    }
                                })} placeholder="Enter Your Full Name" />

                            {errors.name && (<div className="error_message">{errors.name.message}</div>)}
                        </div>
                        <div className="module_form_input">
                            <input type="text" name="username"
                                ref={register({
                                    required: "This field is required",
                                    minLength: {
                                        value: 4,
                                        message: "Enter at least four characters"
                                    }
                                })} placeholder="Enter Your Full Name" />

                            {errors.username && (<div className="error_message">{errors.username.message}</div>)}
                        </div>
                        <div className="module_form_input">
                            <input type="text" name="email"
                                ref={register({
                                    required: "This field is required",
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: "Enter right pattern"
                                    }
                                })} placeholder="Enter Your Email" />

                            {errors.email && (<div className="error_message">{errors.email.message}</div>)}
                        </div>
                        <div className="module_form_input">
                            <input type="text" name="website"
                                ref={register({
                                    required: "This field is required",

                                })} placeholder="Enter Your website" />

                            {errors.website && (<div className="error_message">{errors.website.message}</div>)}
                        </div>




                        <input className="submit_button" type="submit" />
                    </form>
                </div>

            </div>
        </div>
    )
}

export default EditContactForm;
