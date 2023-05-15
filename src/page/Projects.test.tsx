import Projects from "./Projects";
import { render } from "../test-utils";
import { screen } from "@testing-library/react";
import { server } from "../mocks/server";
import { jsonServerProjectsSuccessMock } from "../mocks/json-server/projects/success";

it("renders without crashing", () => {
  render(<Projects />);
});

it("initially shows a loading indicator", () => {
  render(<Projects />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

it.only("renders a project after loading the data", async () => {
  server.listen();
  server.resetHandlers(jsonServerProjectsSuccessMock);
  render(<Projects />);

  const projectElement = await screen.findByText("iJS Conference");

  expect(projectElement).toBeVisible();
});
