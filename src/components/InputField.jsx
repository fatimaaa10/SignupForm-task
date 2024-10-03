import React from "react";
import "../styles/Form.css";

const InputField = ({ label, id, type, name, placeholder, register}) => {
    
    return (
      <div>
        <label>{label}</label>
        <input
          id ={id}
          type={type}
          name={name}
          placeholder={placeholder}
          {...register(id)}
        />
      </div>

    );

}

export default InputField