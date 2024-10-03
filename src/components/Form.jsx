import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import Button from "./Button";
import InputField from "./InputField";
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';
import {useForm} from 'react-hook-form'
import '../styles/Form.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().lowercase()
            .email("Email format is not valid")
            .required("Email is required"),
    password: yup.string()
            .min(8)
            .required("Password is required"),
    confirmPassword: yup.string()
                    .required("Confirm password is required")
                    .oneOf([yup.ref('password')], "Passwords do not match")

})

const SignUpForm = () => {
    const navigate = useNavigate();
    
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const {
        register, 
        handleSubmit, 
        formState: {errors},
    } = useForm(  {
        resolver: yupResolver(schema)
    })

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text');
        } else {
            setIcon(eyeOff);
            setType('password');
        }
    }

    const onSubmit = (data) => {
        navigate('/preview', {state : data})
    }

    return (
        <div className="form-container">
            <h1>Sign Up</h1>
            <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-field-container">
                    <InputField
                        id="username"
                        label="Username"
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        register={register}
                        />
                        {errors.username &&
                        <p className="error">{errors.username.message}</p>}
                </div>

                <div className="input-field-container">
                    <InputField
                    id="email"
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    register={register}
                    />
                    {errors.email && 
                    <p className="error">{errors.email.message}</p>}
                </div>

                <div className="input-field-container">
                    <InputField
                    id="password"
                    label="Password"
                    type={type}
                    name="password"
                    placeholder="Enter your password"
                    register={register}
                    />
                    {errors.password && 
                    <p className="error">{errors.password.message}</p>}
                <span className="eye-icon" onClick={handleToggle}>
                    <Icon icon={icon} size={20}/>
                </span>
                </div>

                <div className="input-field-container">
                    <InputField
                    id="confirmPassword"
                    label="Confirm Password"
                    type={type}
                    name="confirmPassword"
                    placeholder="Re-enter password"
                    register={register}
                    />
                    {errors.confirmPassword && 
                    <p className="error">{errors.confirmPassword.message}</p>}
                <span className="eye-icon" onClick={handleToggle}>
                    <Icon icon={icon} size={20}/>
                </span>
                </div>

                <Button type="submit" />
                    
            </form>
        </div>
    )   
}

export default SignUpForm