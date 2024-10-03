import React from "react";
import { useLocation } from "react-router";
import '../styles/Preview.css'

const Preview = () => {

    const location = useLocation();
    const formData = location.state;

    return (
        <div className="preview-container">
            <h2>Here is a quick preview of your form</h2>
            <p><strong>Username:</strong> {formData.username} </p>
            <p><strong>Email:</strong> {formData.email} </p>
            <p><strong>Password:</strong> {formData.password} </p>

        </div>
    )
}

export default Preview