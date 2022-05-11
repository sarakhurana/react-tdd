import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setTimeout(() => setCounter(counter + 1), 5000);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1 data-testid="data-test-counter-value">{counter}</h1>
      <button data-testid="data-test-increment-btn" onClick={handleIncrement}>
        +
      </button>
      <button data-testid="data-test-decrement-btn" onClick={handleDecrement}>
        -
      </button>
    </>
  );
};
export default Counter;
