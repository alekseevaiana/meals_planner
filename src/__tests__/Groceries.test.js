import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Groceries from "../components/Groceries";

describe("Groceries", () => {
  test("Add new checklist element", async () => {
    const allIngridients = ["ground beef", "pasta", "meat"];
    render(<Groceries allIngridients={allIngridients} />);
  });
});
