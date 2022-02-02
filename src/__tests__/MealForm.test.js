import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MealForm from "../components/MealForm";

test("renders Meal Form", async () => {
  render(<MealForm />);
});
