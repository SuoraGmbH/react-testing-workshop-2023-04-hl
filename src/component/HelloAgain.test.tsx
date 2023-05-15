import {render, screen} from "@testing-library/react";
import {HelloAgain} from "./HelloAgain"

it("renders without crashing", () => {
    render(<HelloAgain />)
})

it('displays Hello Again on the screen', () => {
    render(<HelloAgain />)

    expect(screen.getByText('Hello Again!')).toBeVisible()
})
