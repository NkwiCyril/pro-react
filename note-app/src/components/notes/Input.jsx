import React from "react";

function Input({ value, handleInput }) {
  return (
    <>
      <input
        type="text"
        name="content"
        value={value}
        placeholder="Type your note here"
        onChange={(event) => handleInput(event)}
        required
      />
    </>
  );
}

export default Input;
