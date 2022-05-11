import axios from "axios";
import React, { useState } from "react";

const ApiService = ({url}) => {
  const [response, setResponse] = useState(null);

  const getResponse = async () => {
    const res = await axios.get(url);
    setResponse(res.data.login);
  };
  return (
    <>
      <button data-testid="test-api-btn" onClick={getResponse}>
        Fetch Result
      </button>
      {response ? (
        <p data-testid="test-api-response">{response}</p>
      ) : (
        <p data-testid="test-loading-text"> Loading...</p>
      )}
    </>
  );
};

export default ApiService;
