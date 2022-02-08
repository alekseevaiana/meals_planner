import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import IngridientsPreview from "../components/IngridientsPreview";

describe("IngridientsPreview", () => {
  test("render ingridients", async () => {
    const list = ["cheese", "lemon"];
    const { queryByText } = render(<IngridientsPreview ingridients={list} />);

    expect(queryByText("cheese")).not.toEqual(null);
    expect(queryByText("lemon")).not.toEqual(null);
  });
});
