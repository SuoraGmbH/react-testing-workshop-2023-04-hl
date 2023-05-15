import {isEven} from "./isEven";

test("2 is really really even", () => {
    const result = isEven(2)

    expect(result).toBe(true)
})
