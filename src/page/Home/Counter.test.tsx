import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

it("renders without crashing", () => {
  render(<Counter />);
});

it("Displays zero initially", () => {
  render(<Counter />);

  expect(screen.getByText(/0/)).toBeInTheDocument();
});

it("Displays one after clicking the button once", async () => {
  render(<Counter />);
  const user = userEvent.setup();

  const button = screen.getByText("Increment");
  await user.click(button);

  expect(screen.getByText(/: 1$/i)).toBeInTheDocument();
});

it("Displays 5 after clicking 5 times", async () => {
  render(<Counter />);
  const user = userEvent.setup();

  const button = screen.getByText("Increment");

  for (let i = 0; i < 5; ++i) {
    await user.click(button);
  }

  expect(screen.getByText(/: 5$/i)).toBeInTheDocument();
});

// I don't necessarily recommend this.
it("Displays the correct number after clicking random times", async () => {
  const randomClicks = Math.floor(Math.random() * 100);

  render(<Counter />);
  const user = userEvent.setup();

  const button = screen.getByText("Increment");

  for (let i = 0; i < randomClicks; ++i) {
    await user.click(button);
  }

  expect(
    screen.getByText(new RegExp(`: ${randomClicks}$`, "i"))
  ).toBeInTheDocument();
});
