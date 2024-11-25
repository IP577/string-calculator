import { render, screen } from "@testing-library/react";
import StringCalculator from "../StringCalculator.jsx";

test("UI: should render input, button, and result", () => {
  render(<StringCalculator />);

  expect(screen.getByPlaceholderText(/enter numbers/i)).toBeInTheDocument();
  expect(screen.getByText(/calculate/i)).toBeInTheDocument();
  expect(screen.getByTestId("result")).toBeInTheDocument();
});
