const assertEqual = require('./assertEqual');

const tail = function(arr) {
  return arr.splice(1)
};

module.exports = tail;