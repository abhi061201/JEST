const multiply = require('./index')


test("description 1", () => {
    // this is deep equality check by toBe
    expect(multiply(2, 4)).toBe(8)  // toBe check deep equality like === operator
})

// for object we need to use toEqual
test("testing object", () => {
    const data = { alpha: "A"};
    data['beta'] ='B';
    // this is not deep equality
    expect(data).toEqual({ alpha: "A", beta: "B" }); // isEqual check == (structure same and values same)
})