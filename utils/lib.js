const eq = (a, b) => a === b;
const partial = (f, ...a) => (...b) => f.apply(null, [...a, ...b]);
const slice = (start, end, ctx) => ctx.slice(start, end);
const or = (a, b) => a || b;
const either = (pred, pred2) => (...args) => pred(...args) || pred2(...args);
const join = (separator, ctx) => ctx.join(separator);
const pipe = (f, ...fns) => fns.reduce((a, b) => (...c) => b(a(...c)), f);
const len = ctx => ctx.length;

module.exports = {
  len,
  partial,
  either,
  pipe,
  slice,
  join,
  eq,
  or,
};
