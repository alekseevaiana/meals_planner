import {
  render,
  fireEvent,
  waitFor,
  screen,
  getByTestId,
  within,
  getAllByTestId,
  queryAllByTestId,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import IngridientsList from "../components/IngridientsList";
import userEvent from "@testing-library/user-event";

describe("IngridientsList", () => {
  test("Render ingridients list", async () => {
    const list = ["cheese", "lemon"];
    const { queryByText } = render(<IngridientsList ingridients={list} />);

    expect(queryByText("cheese")).not.toEqual(null);
    expect(queryByText("lemon")).not.toEqual(null);
  });
});

describe("IngridientsList", () => {
  test("Should call handleDelete when user click ClearIcon", async () => {
    const handleDelete = jest.fn();
    const list = ["cheese", "lemon"];
    const { queryByText } = render(
      <IngridientsList
        ingridients={list}
        type="form"
        handleDelete={handleDelete}
      />
    );
    const button = screen.queryAllByTestId("ClearIcon")[0];
    userEvent.click(button);
    expect(handleDelete).toHaveBeenCalledWith(0);
  });
});
