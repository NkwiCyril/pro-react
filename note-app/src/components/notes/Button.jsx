import React from "react";

function Button({ name, type, className, handleClick }) {
  return (
    <>
      <button type={type} className={className} onClick={event => handleClick(event)}>
        {name}
      </button>
    </>
  );
}

export default Button;
