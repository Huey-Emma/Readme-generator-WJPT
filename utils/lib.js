const eq = (a, b) => a === b;
const partial = (f, ...a) => (...b) => f.apply(null, [...a, ...b]);
const slice = (start, end, ctx) => ctx.slice(start, end);

module.exports = {
  partial,
  slice,
  eq,
};
