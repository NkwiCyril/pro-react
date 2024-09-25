import React from "react";

function Input({ name, value, handleInput }) {
  return (
    <>
      <input
        type="text"
        name="content"
        value={value}
        placeholder="Type your note here"
        onChange={(event) => handleInput(event)}
      />
    </>
  );
}

export default Input;
