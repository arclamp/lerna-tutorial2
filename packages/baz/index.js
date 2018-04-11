var foo = require('@arclamp/foo');
var bar = require('@arclamp/bar');

function random (x, y) {
  return foo() * bar(x, y);
}

function nonrandom (x, y) {
  return 0.5 * bar(x, y);
}

module.exports = {
  random: random,
  nonrandom: nonrandom
};
