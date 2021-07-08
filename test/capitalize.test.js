const capitalize = require('../code/capitalize');

test('turn hello into Hello', () => {
  expect(capitalize("hello")).toBe("Hello");
})

test('turn nice into Nice', () => {
    expect(capitalize("nice")).toBe("Nice")
})

test('turn eww into Eww', () => {
    expect(capitalize("eww")).toBe("Eww")
})

test('turn last into Last', () => {
    expect(capitalize("last")).toBe("Last")
})