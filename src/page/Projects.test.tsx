import Projects from "./Projects";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "../test-utils";

it("renders without crashing", () => {
  const client = new QueryClient();

  render(<Projects />);
});
