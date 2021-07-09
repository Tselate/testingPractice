const arrayAnalysis = require("../code/array")

test ('turn array into object', () => {
    expect(arrayAnalysis([5,5,5])).toEqual({
        average: 5,
        min: 5,
        max: 5,
        length: 3
    })
})

test ('turn array into object', () => {
    expect(arrayAnalysis([1,2,3,4])).toEqual({
        average: 2.5,
        min: 1,
        max: 4,
        length: 4
    })
})