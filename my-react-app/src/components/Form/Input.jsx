import React from "react";

function Input({ label, placeholder, name, type, handleChange}) {
  return (
    <div className="input">
      <label htmlFor="name">{label}</label>
      <input type={type} name={name} placeholder={placeholder} onChange={event => handleChange(event)}/>
    </div>
  );
}

export default Input;
