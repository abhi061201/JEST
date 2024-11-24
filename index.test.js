const fetchData = require('./index')

// Async test
test("async operation test", () => {
    return fetchData(false).then((data) => {
        expect(data).toBe("gotcha");
    })
})


// another method of writing testcase

test("async operation await", async () => {

    const data = await fetchData(true);
    expect(data).toBe("hello");
})

// using promise

test("aysnc promise", async () => {
     await expect(fetchData()).resolves.toBe("gotcha")
})