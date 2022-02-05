import { render, act, fireEvent, waitFor } from "@testing-library/react";
import Counter from "./Counter";

describe("Basic rendering of Counter", () => {
  test("should render", () => {
    const { asFragment } = render(<Counter />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("should show counter text", () => {
    const { getByTestId, getByText } = render(<Counter />);

    const counterValue = getByTestId("data-test-counter-value");

    expect(counterValue.textContent).toBe("0");
    expect(getByText("0")).toBeInTheDocument();
  });

  test("should render increment button", () => {
    const { getByTestId } = render(<Counter />);

    const incrementBtn = getByTestId("data-test-increment-btn");

    expect(incrementBtn).toBeDefined();
  });

  test("should render decrement button as disabled", () => {
    const { getByTestId } = render(<Counter />);

    const decrementBtn = getByTestId("data-test-decrement-btn");

    expect(decrementBtn).toBeDefined();
  });
});

describe("Counter functionality", () => {
  test("increment button should increase counter value by 1", async() => {
    //jest.useFakeTimers();
    const { getByTestId, getByText } = render(<Counter />);

    const incrementBtn = getByTestId("data-test-increment-btn");
     act(()=>{fireEvent.click(incrementBtn)})
     //jest.runAllTimers();

     const counter = await waitFor(()=>getByText("1"));

     expect(counter).toHaveTextContent("1");
  });

  test("decrement button should decrease counter value by 1", () => {
    const { getByTestId } = render(<Counter />);

    const decrementBtn = getByTestId("data-test-decrement-btn");
    act(()=>{fireEvent.click(decrementBtn)})

    expect(getByTestId("data-test-counter-value").textContent).toBe("-1");
  });
});
