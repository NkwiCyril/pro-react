import React, { useState } from "react";

function Array() {
  const [number, setNumber] = useState([1, 2]);

  const addNumber = (e) => {
    e.preventDefault();
    setNumber([...number, e.target.value] );
  };

  return (
    <div>
      <form onSubmit={addNumber}>
        New number:
        <input name="newNum" type="number" />
        <button type="submit">Add</button>
      </form>
      <h2>{number}</h2>
    </div>
  );
}

export default Array;
