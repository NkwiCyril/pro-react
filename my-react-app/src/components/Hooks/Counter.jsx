import React, { useState } from "react";

function Counter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementByFive = () => {
    setCount((prevState) => prevState + 5);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(initialCount);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <button onClick={incrementByFive}>+5</button>
    </div>
  );
}

export default Counter;
