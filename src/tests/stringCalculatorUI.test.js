import { fireEvent, render, screen } from "@testing-library/react";
import StringCalculator from "../StringCalculator.jsx";

test("UI: should render input, button, and result", () => {
  render(<StringCalculator />);

  expect(screen.getByPlaceholderText(/enter numbers/i)).toBeInTheDocument();
  expect(screen.getByText(/calculate/i)).toBeInTheDocument();
  expect(screen.getByTestId("result")).toBeInTheDocument();
});

test("UI: should show result when numbers are entered and calculate button is clicked", () => {
  render(<StringCalculator />);

  const input = screen.getByPlaceholderText(/enter numbers/i);
  const button = screen.getByText(/calculate/i);

  fireEvent.change(input, { target: { value: "1,2,3" } });
  fireEvent.click(button);

  expect(screen.getByTestId("result")).toHaveTextContent("6");
});
