import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddIngridient from "../components/AddIngridient";
import userEvent from "@testing-library/user-event";

describe("AddIngridients", () => {
  test("Input for ingridient works", async () => {
    const allIngridients = ["ground beef", "pasta", "meat"];
    const { getByRole } = render(
      <AddIngridient allIngridients={allIngridients} />
    );
    const input = getByRole("textbox");
    userEvent.type(input, "rice");
    expect(input).toHaveValue("rice");
  });

  test("Ingridient should be added", async () => {
    const onChange = jest.fn();
    const allIngridients = ["ground beef", "pasta", "meat"];

    const ingridients = ["rice", "meat"];
    const newIngridient = "sour cream";
    const { getByRole, getByTestId } = render(
      <AddIngridient
        ingridients={ingridients}
        onChange={onChange}
        allIngridients={allIngridients}
      />
    );
    const input = getByRole("textbox");
    const button = getByTestId("AddIcon");
    userEvent.type(input, newIngridient);
    userEvent.click(button);
    expect(onChange).toHaveBeenCalledWith(["rice", "meat", "sour cream"]);
  });
});
