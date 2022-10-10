import { render, screen, fireEvent } from "@testing-library/react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import App from "./App";

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
