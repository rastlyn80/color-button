import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

test("button is enabled at the beginning and checkbox checked", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkboxElement = screen.getByRole("checkbox", {
    name: "Disable button",
  });

  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).toBeChecked();
});

test("button is disabled when checkbox is ticked", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkboxElement = screen.getByRole("checkbox");

  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("button has correct initial text and color", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(buttonElement).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

test("button turns blue when clicked", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveStyle({ backgroundColor: "MidnightBlue" });
  expect(buttonElement).toHaveTextContent("Change to Medium Violet Red");
});

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("Works for one inner capital letters", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
