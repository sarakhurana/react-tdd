import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setTimeout(() => setCounter(counter + 1), 1000);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1 data-testid="data-test-counter-value">{counter}</h1>
      <button data-testid="data-test-increment-btn" onClick={handleIncrement}>
        increment counter
      </button>
      <button data-testid="data-test-decrement-btn" onClick={handleDecrement}>
        decrement counter
      </button>
    </>
  );
};
export default Counter;
