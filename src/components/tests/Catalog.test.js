import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Catalog from "../Catalog.js";

describe("Catalog testings", () => {
  test("catalog should render the correct amount of categories", () => {
    const catalogLength = 5;
    render(<Catalog />);
    const renderedCatalog = screen.getByRole("list");
    expect(renderedCatalog.children.length).toBe(catalogLength);
  });
});
