const reverseString = require('../code/reverseString')

test('turn mars into sram', () => {
    expect(reverseString("mars")).toBe("sram")
})

test('turn luna into anul', () => {
    expect(reverseString("luna")).toBe("anul")
})

test('turn santos into sotnas', () => {
    expect(reverseString("santos")).toBe("sotnas")
})

test('turn corre into erroc', () => {
    expect(reverseString("corre")).toBe("erroc")
})