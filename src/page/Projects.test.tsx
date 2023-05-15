import Projects from "./Projects";
import { render } from "../test-utils";
import { screen } from "@testing-library/react";
import { server } from "../mocks/server";
import { jsonServerProjectsSuccessMock } from "../mocks/json-server/projects/success";
import { jsonServerProjectsErrorMock } from "../mocks/json-server/projects/error";

beforeEach(() => {
  // Look at this line
  server.resetHandlers(jsonServerProjectsSuccessMock);
});

it("renders without crashing", () => {
  render(<Projects />);
});

it("initially shows a loading indicator", () => {
  render(<Projects />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

it("renders handlers backend errors correctly", async () => {
  server.resetHandlers(jsonServerProjectsErrorMock);
  render(<Projects />);

  // TODO: verify error handling works
});

it("renders a project after loading the data", async () => {
  render(<Projects />);

  const projectElement = await screen.findByText("iJS Conference");

  expect(projectElement).toBeVisible();
});
