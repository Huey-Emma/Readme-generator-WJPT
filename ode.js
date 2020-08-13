const { log } = console;

const { or, join } = require('./utils/lib');

const thunkify = fn => (...args) => () => fn(...args);

const add = (a, b) => a + b;

const lazyAdd = thunkify(add)(2, 3);

const p = Promise.resolve(22);
const x = Promise.resolve(23);
const y = Promise.resolve(24);

const promises = async () => {
  const prom = await Promise.all([p, x, y]);
  log(prom);
};

log(process.argv);
