import React from 'react';
import '../styles/Form.css';

const Button = ({type}) => {
    
    return (
        <div>
            <button type={type} className="submit-button">Submit</button>
        </div>
    )
}

export default Button

