import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("renders button component", () => {
  const mockOnClick = jest.fn();
  const buttonText = "Click Me";

  render(<Button onClick={mockOnClick} text={buttonText} />);

  const buttonElement = screen.getByText(buttonText);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement.tagName).toBe("BUTTON");
});

test("calls onClick function when button is clicked", () => {
  const mockOnClick = jest.fn();
  const buttonText = "Click Me";

  render(<Button onClick={mockOnClick} text={buttonText} />);

  const buttonElement = screen.getByText(buttonText);
  fireEvent.click(buttonElement);

  expect(mockOnClick).toHaveBeenCalledTimes(1);
});

test("button is disabled when disabled prop is true", () => {
  const mockOnClick = jest.fn();
  const buttonText = "Click Me";

  render(<Button onClick={mockOnClick} text={buttonText} disabled={true} />);

  const buttonElement = screen.getByText(buttonText);
  expect(buttonElement).toBeDisabled();
});
