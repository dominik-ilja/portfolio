import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Overlay from "../Overlay";

/*
  https://stackoverflow.com/questions/71010317/react-testing-library-cant-read-styles-using-tailwind-css-classes
*/

describe("tests for Overlay component", () => {
  it("should be hidden when first added", () => {
    render(<Overlay data-testid="overlay">Test</Overlay>);

    expect(screen.getByTestId("overlay")).toBeInTheDocument();
    expect(screen.getByTestId("overlay")).toHaveClass("hidden");
  });
});
