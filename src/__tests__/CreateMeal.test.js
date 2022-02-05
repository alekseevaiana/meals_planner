import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CreateMeal from "../components/CreateMeal";

describe("CreateMeal", () => {
  test("renders create meal component", async () => {
    const allIngridients = ["ground beef", "pasta", "meat"];
    render(<CreateMeal allIngridients={allIngridients} />);
  });
});
