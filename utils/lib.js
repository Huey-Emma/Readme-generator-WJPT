const eq = (a, b) => a === b;
const partial = (f, ...a) => (...b) => f.apply(null, [...a, ...b]);
const slice = (start, end, ctx) => ctx.slice(start, end);
const or = (a, b) => a || b;
const join = (separator, ctx) => ctx.join(separator);
const pipe = (f, ...fns) => fns.reduce((a, b) => (...c) => b(a(...c)), f);
const len = ctx => ctx.length;

module.exports = {
  len,
  partial,
  pipe,
  slice,
  join,
  eq,
  or,
};
