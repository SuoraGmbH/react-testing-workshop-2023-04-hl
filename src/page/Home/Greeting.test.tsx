import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

it("renders without crashing", () => {
  render(<Greeting />);
});

it('displays some greeting', () => {
  render(<Greeting />)

  expect(screen.getByText('hello', {exact: false})).toBeVisible()
})

it('displays the given name', () => {
  render(<Greeting name="Fabian" />)

  expect(screen.getByText('Fabian', {exact: false})).toBeVisible()
})

it('displays Hello if given a name', () => {
  render(<Greeting name="Fabian" />)

  expect(screen.getByText('Hello', {exact: false})).toBeVisible()
})

it('renders according to snapshot', () => {
  const {container} = render(<Greeting name="Fabian" />)

  expect(container).toMatchSnapshot()
})

it('renders according to snapshot for unknown users', () => {
  const {container} = render(<Greeting />)

  expect(container).toMatchSnapshot()
})


//
// it("greets strangers nicely", () => {
//   render(<Greeting />);
//
//   expect(screen.getByText("Hello stranger!")).toBeVisible();
// });
//
// test("displays the given name", () => {
//   render(<Greeting name="kek" />);
//
//   expect(screen.getByText("Hello, dear kek!")).toBeVisible();
// });
//
// test("it greets persons with just spaces in their name as strangers", () => {
//   render(<Greeting name="      " />);
//
//   expect(screen.getByText("Hello stranger!")).toBeVisible();
// });
//
//
