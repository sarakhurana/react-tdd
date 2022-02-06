import axios from "axios";
import React, { useState } from "react";

const ApiService = () => {
  const [response, setResponse] = useState(null);

  const getResponse = async() => {
    const res = await axios.get("https://api.github.com/users/defunkt");
    setResponse(res.data.login);
  };
  return (
    <>
      <button data-testid="data-test-api-btn" onClick={getResponse}> get response</button>
      <p data-testid="data-test-api-response">{response? response: 'loading...'}</p>
    </>
  );
};

export default ApiService;
