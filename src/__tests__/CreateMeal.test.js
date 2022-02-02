import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CreateMeal from "../components/CreateMeal";

test("renders create meal component", async () => {
  render(<CreateMeal />);
});
