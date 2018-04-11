var foo = require('@arclamp/foo');
var bar = require('@arclamp/bar');

module.exports = function (x, y) {
  return foo() * bar(x, y);
};
