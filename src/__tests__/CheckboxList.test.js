import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CheckboxList from "../components/CheckboxList";

describe("CheckboxList", () => {
  test("renders list of checkbox elements", async () => {
    const allIngridients = ["ground beef", "pasta", "meat"];
    render(<CheckboxList allIngridients={allIngridients} />);
  });
});
