import axios from "axios";
import React, { useState } from "react";

const Test = ({ url }) => {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(null);
  const handleIncrement = () => {
    setTimeout(() => setCounter(counter + 1), 500);
  };
  const getResponse = async() => {
    const response = await axios.get(url);
    setData(response.data?.login);
  };
  return (
    <>
      <h1 data-testid="data-test-counter-value">{"My Counter"}</h1>
      <h1 data-testid="data-test-counter-value">{counter}</h1>
      <button data-testid="data-test-increment-btn" onClick={handleIncrement}>
        increment counter
      </button>
      <button data-testid="data-test-decrement-btn" disabled>
        decrement counter
      </button>
      <button data-testid="btn" onClick={getResponse}>{"get data"}</button>
      <p data-testid="api"> {data ? data : "loading..."}</p>
    </>
  );
};

export default Test;
