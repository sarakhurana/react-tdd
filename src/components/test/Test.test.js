import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import Test from "./Test";
import axiosMock from 'axios';

jest.mock('axios');

describe("basic rendering of counter", () => {
  test("should render", () => {
    const { asFragment } = render(<Test />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("should show counter value", () => {
    const { getByTestId } = render(<Test />);

    const counterValue = getByTestId("data-test-counter-value");

    expect(counterValue).toHaveTextContent("0");
  });

  test("should render increment counter button", () => {
    const { getByTestId } = render(<Test />);

    const incrementBtn = getByTestId("data-test-increment-btn");

    expect(incrementBtn).toBeInTheDocument();
  });

  test("should render decrement counter button", () => {
    const { getByTestId } = render(<Test />);

    const decrementBtn = getByTestId("data-test-decrement-btn");

    expect(decrementBtn).toBeInTheDocument();
    expect(decrementBtn).toBeDisabled();
  });
});

describe("counter functionality", () => {
  test("increment counter by 1 on button click", async() => {
    const { getByTestId } = render(<Test />);

    const incrementBtn = getByTestId("data-test-increment-btn");
    fireEvent.click(incrementBtn);
    const counterValue = getByTestId("data-test-counter-value");

    await waitFor(()=>expect(counterValue).toHaveTextContent(1));
  });

  test.only("api", async()=>{
      axiosMock.get.mockResolvedValueOnce({
          data: {
              login: "name"
          }
      })
      const {getByTestId} = render(<Test url={"/hello"}/>)

      const btn = getByTestId('btn');;
      fireEvent.click(btn)

      const response = getByTestId('api');
    
      await waitFor(()=>expect(response).toHaveTextContent('name'));
      expect(axiosMock.get).toBeCalledWith(
          "/hello")
  })
});
