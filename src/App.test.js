import { render, screen, fireEvent } from "@testing-library/react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import App from "./App";

test("button is enabled at the beginning and checkbox checked", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "Change to red" });
  const checkboxElement = screen.getByRole("checkbox", {
    name: "Disable button",
  });

  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).toBeChecked();
});

test("button is disabled when checkbox is ticked", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "Change to red" });
  const checkboxElement = screen.getByRole("checkbox");

  fireEvent.click(checkboxElement);
  expect(buttonElement).not.toBeEnabled();
  expect(buttonElement).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});

test("button has correct initial text and color", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "Change to red" });
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});

test("button turns blue when clicked", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "Change to red" });
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveStyle({ backgroundColor: "red" });
  expect(buttonElement).toHaveTextContent("Change to blue");
});
