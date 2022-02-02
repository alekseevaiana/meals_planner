import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import { HashRouter } from "react-router-dom";

test("renders App", async () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );
});
