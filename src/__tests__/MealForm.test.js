import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import MealForm from "../components/MealForm";

describe("MealForm", () => {
  test("render name in input", async () => {
    const allIngridients = ["ground beef", "pasta", "meat"];

    const mealName = "potato";
    const value = { name: mealName, ingridients: [] };

    const { getByLabelText } = render(
      <MealForm value={value} allIngridients={allIngridients} />
    );
    const input = getByLabelText("Title");
    expect(input.value).toEqual(mealName);
  });

  test("return new name on submit", async () => {
    const allIngridients = ["ground beef", "pasta", "meat"];

    const onChange = jest.fn();
    const mealName = "Meat with potato";
    const newName = "Meat with Rice";
    const value = { name: mealName, id: "1", ingridients: ["rice", "meat"] };
    const { getByLabelText, container } = render(
      <MealForm
        value={value}
        onChange={onChange}
        allIngridients={allIngridients}
      />
    );
    const input = getByLabelText("Title");
    userEvent.clear(input);
    userEvent.type(input, newName);

    const form = container.querySelector("form");
    expect(form).not.toEqual(null);

    fireEvent.submit(form);

    expect(onChange).toHaveBeenCalledWith({
      id: "1",
      name: newName,
      ingridients: ["rice", "meat"],
    });
  });
});
