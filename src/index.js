const debounce = (fn, ms = 0) => {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);

const memoize = fn => {
  const cache = new Map();
  const cached = function(val) {
    return cache.has(val)
      ? cache.get(val)
      : cache.set(val, fn.call(this, val)) && cache.get(val);
  };
  cached.cache = cache;
  return cached;
};

module.exports = {
  debounce,
  defer,
  delay,
  memoize
};
