import { useState } from "react";
import "@testing-library/jest-dom";
import { render, screen } from "../../test/test_utils";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";

const TestModal = ({ state }: { state: boolean }) => {
  const [hidden, setHidden] = useState(state);

  return (
    <>
      <button onClick={() => setHidden(false)}>Open</button>
      <Modal hidden={hidden}>
        <button onClick={() => setHidden(true)}>Close</button>
      </Modal>
    </>
  );
};

describe("tests for Modal component", () => {
  it("should show modal", () => {
    render(
      <Modal hidden={false}>
        <button>Do not click me</button>
      </Modal>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("should not show modal", () => {
    render(
      <Modal hidden>
        <button>Do not click me</button>
      </Modal>
    );
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
  it("should show modal on button click", async () => {
    const user = userEvent.setup();
    render(<TestModal state={true} />);

    // open button is in document
    expect(screen.getByRole("button", { name: "Open" })).toBeInTheDocument();
    // close button is not in document meaning modal isn't visible
    expect(
      screen.queryByRole("button", { name: "Close" })
    ).not.toBeInTheDocument();

    // user clicks open button
    await user.click(screen.getByRole("button", { name: "Open" }));

    // modal is now visible
    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
  });
  it("should close modal on button click", async () => {
    const user = userEvent.setup();
    render(<TestModal state={false} />);

    // close button is in document meaning modal is visible
    expect(screen.queryByRole("button", { name: "Close" })).toBeInTheDocument();

    // user clicks close button
    await user.click(screen.getByRole("button", { name: "Close" }));

    // modal is now closed
    expect(
      screen.queryByRole("button", { name: "Close" })
    ).not.toBeInTheDocument();
  });
  it("should close modal on background click", () => {
    throw new Error("test not setup");
  });
});
