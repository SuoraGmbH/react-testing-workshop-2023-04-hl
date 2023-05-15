import Projects from "./Projects";
import { render } from "../test-utils";
import { screen } from "@testing-library/react";

it("renders without crashing", () => {
  render(<Projects />);
});

it("initially shows a loading indicator", () => {
  render(<Projects />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

it("renders a project after loading the data", async () => {
  render(<Projects />);

  const projectElement = await screen.findByText("iJS Conference");

  expect(projectElement).toBeVisible();
});
