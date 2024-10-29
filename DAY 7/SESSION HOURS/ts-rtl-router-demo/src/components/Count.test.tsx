import { render, fireEvent } from "@testing-library/react";
import { Count } from "./Count";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Count Component", () => {
  it("Should render the expected output", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Count />
      </BrowserRouter>
    );

    const heading = getByText(/Component with Dynamic Count/i);
    const count = getByText(/the count is 0/i);

    expect(heading).toBeInTheDocument();
    expect(count).toBeInTheDocument();
  });

  it("SHOULD increment the count when the button is clicked", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Count />
      </BrowserRouter>
    );

    const button = getByText("Increment Count");
    const count = getByText("The count is 0");

    fireEvent.click(button);

    expect(count).toHaveTextContent("The count is 1");
  });
});
