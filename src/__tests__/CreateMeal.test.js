import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CreateMeal from "../components/CreateMeal";
import allIngridientsData from "../data";

describe("CreateMeal", () => {
  test("renders create meal component", async () => {
    render(<CreateMeal allIngridients={allIngridientsData} />);
  });
});
