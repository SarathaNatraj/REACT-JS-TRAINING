import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Login } from "./Login";
import { BrowserRouter } from "react-router-dom";

describe("Login component", () => {
  it("shows successful login message when user logs in with correct credentials", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    // Use userEvent to simulate a successful login
    userEvent.type(screen.getByLabelText("Username"), "hello");
    userEvent.type(screen.getByLabelText("Password"), "123");
    userEvent.click(screen.getByRole("button", { name: "Submit" }));
  });
});
