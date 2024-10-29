import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { About } from "./About";
import { Home } from "./Home";

import { Router } from 'react-router';





describe("App", () => {
  it("Renders About component", () => {
    const { getByText } = render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );

    const button = getByText(/back to home/i);
    fireEvent.click(button);
    console.log(global.window.location.pathname);
    expect(global.window.location.pathname).toContain('/home');

  });
});
