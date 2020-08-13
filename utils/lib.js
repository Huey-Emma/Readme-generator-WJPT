const partial = (f, ...a) => (...b) => f.apply(null, [...a, ...b]);

module.exports = {
  partial,
};
