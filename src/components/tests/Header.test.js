import { render, screen } from "@testing-library/react";
import Header from "../Header.js";
import "@testing-library/jest-dom";

describe("header testing", () => {
  test("renders simple cart", () => {});
  render(<Header cart={"rendered!"} />);
  const headerCart = screen.getByTestId("headerTest");
  expect(headerCart.textContent).toContain("rendered!");
});
