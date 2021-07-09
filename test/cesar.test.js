const cesar = require("../code/cesar")

test('turn what into tahw', () => {
    expect(cesar("what")).toBe("tahw")
})

test('Hello what into olleH ', () => {
    expect(cesar("Hello")).toBe("olleH")
})

test('Hi, how are you? what into ?uoy era woh, iH', () => {
    expect(cesar("Hi, how are you?")).toBe("?uoy era woh ,iH")
})