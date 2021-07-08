const calculator = require('../code/calculator')

test('add values of a and b', () => {
    expect( calculator.add(1, 1)).toBe(2)
})

test('subtract values of a and b', () => {
    expect( calculator.subtract(1, 1)).toBe(0)
})

test('multiply values of a and b', () => {
   expect( calculator.multiply(10, 2)).toBe(20)
})

test('divide values of a and b', () => {
    expect( calculator.divide(10, 5)).toBe(2)
})

