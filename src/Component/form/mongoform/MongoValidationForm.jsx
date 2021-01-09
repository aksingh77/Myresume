import { Toolbar } from '@material-ui/core'
import React from 'react'
import axios from 'axios'
import './MonogValidationForm.css'

import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

const MonogValidationForm = () => {

    const history = useHistory()
    const { register, errors, handleSubmit } = useForm({
        mode: 'onTouched'
    });
    const onSubmit = async (data) => {
        const newData = {
            firstName: data.firstName,
            email: data.email,
            number: data.number,
            selectoption: data.selectoption,
            gender: data.gender,
        }
        console.log(newData);
        await axios.post("http://localhost:30001/add", newData);
        history.push('/mongoformdata/view')
    };
    return (
        <div>
            <Toolbar />
            <div className="container pt-4">
                <div className="row">

                    <div className="col-md-6 m-auto background" >
                        <p className="module_form_title">Validate Form</p>
                        <form className="module_from" onSubmit={handleSubmit(onSubmit)}>
                            <div className="module_form_input">
                                <input type="text" name="firstName"
                                    ref={register({
                                        required: "This field is required",
                                        minLength: {
                                            value: 4,
                                            message: "Enter at least four characters"
                                        }
                                    })} placeholder="Enter Your Full Name" />

                                {errors.firstName && (<div className="error_message">{errors.firstName.message}</div>)}
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
                                <input type="tel" name="number"
                                    ref={register({
                                        required: "This fild is required",
                                        pattern: {
                                            value: /^[7-9][0-9]{9}$/,
                                            message: "use only number"
                                        },
                                        minLength: {
                                            value: 10,
                                            message: "Enter minimum 10 number"
                                        },
                                        maxLength: {
                                            value: 10,
                                            message: "Enter maximum 10 number"
                                        },

                                    })} placeholder="Enter Your Number" />

                                {errors.number && (<div className="error_message">{errors.number.message}</div>)}
                            </div>
                            <div className="module_form_input select">
                                <label className="form_label">Gender:</label>
                                <input type="radio" name="gender"
                                    ref={register({
                                        required: "This field is required",
                                    })} value="Male" /> Male
                        <input type="radio" name="gender"
                                    ref={register({
                                        required: "This field is required",
                                    })} value="female" /> Female
                        <input type="radio" name="gender"
                                    ref={register({
                                        required: "This field is required",
                                    })} value="other" /> Other
                        {errors.gender && (<div className="error_message">{errors.gender.message}</div>)}
                            </div>
                            <div className="module_form_input">
                                <select name="selectoption" ref={register({ required: "This field is required" })}>
                                    <option value="">Select any title</option>
                                    <option value="Mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Miss">Miss</option>
                                    <option value="Dr">Dr</option>
                                </select>
                                {errors.selectoption && (<div className="error_message">{errors.selectoption.message}</div>)}
                            </div>


                            <input className="submit_button" type="submit" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MonogValidationForm
