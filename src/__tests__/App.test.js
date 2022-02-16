import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App, { updateMeals } from "../App";
import { HashRouter } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

test("renders App", async () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );
});

describe("updateMeals", () => {
  // add test when mealsData is empty

  test("new meal", () => {
    const data = [{ id: 1, name: "juice" }];
    const updated = { name: "potato" };
    const updater = jest.fn();

    updateMeals(data, updated, updater);

    const args = updater.mock.calls[0];
    const fn = args[0];

    expect(fn(data)).toEqual([
      { id: 2, name: "potato" },
      { id: 1, name: "juice" },
    ]);
  });

  test("two meals added meal", () => {
    let data = [{ id: 1, name: "juice" }];
    let updated = { name: "potato" };
    let updater = jest.fn();
    updateMeals(data, updated, updater);
    let args = updater.mock.calls[0];
    let fn = args[0];
    data = fn(data);

    updated = { name: "cookie" };
    updater = jest.fn();
    updateMeals(data, updated, updater);
    args = updater.mock.calls[0];
    fn = args[0];
    data = fn(data);

    expect(data).toEqual([
      { id: 3, name: "cookie" },
      { id: 2, name: "potato" },
      { id: 1, name: "juice" },
    ]);
  });
});
