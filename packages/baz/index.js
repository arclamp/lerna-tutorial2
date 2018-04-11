var foo = require('foo');
var bar = require('bar');

module.exports = function (x, y) {
  return foo() * bar(x, y);
};
