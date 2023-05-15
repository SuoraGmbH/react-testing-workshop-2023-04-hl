import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

it("renders without crashing", () => {
  render(<Greeting />);
});

it("greets strangers nicely", () => {
  render(<Greeting />);

  expect(screen.getByText("Hello stranger!")).toBeVisible();
});

test("displays the given name", () => {
  render(<Greeting name="kek" />);

  expect(screen.getByText("Hello, dear kek!")).toBeVisible();
});

test("it greets persons with just spaces in their name as strangers", () => {
  render(<Greeting name="      " />);

  expect(screen.getByText("Hello stranger!")).toBeVisible();
});
