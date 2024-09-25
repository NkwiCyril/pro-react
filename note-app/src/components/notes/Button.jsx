import React from "react";

function Button({ name, type, className, href }) {
  return (
    <>
      <a href={href}>
        <button type={type} className={className}>
          {name}
        </button>
      </a>
    </>
  );
}

export default Button;
