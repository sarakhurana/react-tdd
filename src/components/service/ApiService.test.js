import React from 'react';
import axiosMock from 'axios';
import { fireEvent, render, waitFor } from '@testing-library/react';
import ApiService from './ApiService';

jest.mock('axios');

describe('apiService',() => {
  beforeEach(()=> jest.clearAllMocks());

  test("loading text should appear", () => {
    const { getByTestId } = render(<ApiService />);

    const text = getByTestId("test-loading-text");

    expect(text).toHaveTextContent("Loading...");
  });

  test("should hit api and print the response on button click", async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: {
        login: "username",
      },
    });

    const { getByTestId, queryByTestId } = render(<ApiService url={"/hello"} />);

    const btn = getByTestId("test-api-btn");
    fireEvent.click(btn);

    const response = await waitFor (()=>getByTestId("test-api-response"));

    expect(axiosMock.get).toBeCalledWith("/hello");
    expect(queryByTestId('test-loading-text')).not.toBeInTheDocument();
    expect(response).toHaveTextContent("username");
  });
})