import { render, screen } from "@testing-library/react";
import Item from "../Item.js";
import "@testing-library/jest-dom";

describe("Item page tests", () => {
  test("alt contains correct value", () => {
    render(<Item frontImg="" name="jestTest" />);
    const testImgs = screen.getAllByRole("img");
    testImgs.forEach((img) => {
      expect(img.alt).toContain("jestTest");
    });
  });

  test("src renders correctly", () => {
    render(<Item frontImg="teste" backImg="teste" name="jestTest" />);
    const testImgs = screen.getAllByRole("img");
    testImgs.forEach((img) => {
      expect(img.src).toContain("teste");
    });
  });

  test("renders description, name and other texts", () => {
    render(
      <Item
        frontImg="teste"
        backImg="teste"
        name="jestTest"
        description={
          "best item ever! this item does what previous item did, but 2x faster!"
        }
      />
    );
    const desc = screen.getByTestId("descriptionSpan");
    expect(desc.textContent).toContain(
      "best item ever! this item does what previous item did, but 2x faster!"
    );

    const name = screen.getByTestId("nameSpan");
    expect(name.textContent).toBe("jestTest");
  });
});
