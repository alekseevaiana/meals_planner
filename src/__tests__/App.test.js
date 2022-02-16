import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App, { updateMeals } from "../App";
import { HashRouter } from "react-router-dom";
import { v4 as uuidv4, validate } from "uuid";

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
    const data = [{ id: uuidv4(), name: "juice" }];
    const updated = { name: "potato" };
    const updater = jest.fn();

    updateMeals(updated, updater);

    const args = updater.mock.calls[0];
    const fn = args[0];

    expect(fn(data)[0].name).toEqual("potato");
    expect(typeof fn(data)[0].id).toEqual("string");
    expect(fn(data)[0].id).toMatch(
      /\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/
    );
    expect(fn(data)[0].id.length).toEqual(36);
    expect(validate(fn(data)[0].id)).toEqual(true);

    expect(fn(data)).toEqual([
      { id: expect.anything(), name: "potato" },
      { id: expect.any(String), name: "juice" },
    ]);

    //expect(validate(id)).toEqual(true)
  });
});
