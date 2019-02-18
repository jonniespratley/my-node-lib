const assert = require("assert");
const { memoize, debounce } = require("../index.js");

function fib(n) {
  if (n <= 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

describe("myNodeLib", () => {
  it("debounce - works", () => {
    assert(debounce, "is defined");
  });
  it("memoize - works", () => {
    const fibCached = memoize(fib);
    fibCached(20);
    fibCached(20);
    console.log(fibCached.cache);
    assert(fibCached.cache, "has cache");
  });
});
