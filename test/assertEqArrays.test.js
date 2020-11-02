const assert = require('chai').assert
const assertArrayEqual = require('../assertArrayEqual');

describe("#eqArrays", () => {
  it("returns [1, 2, 3]", () => {
    assert.strictEqual(assertArrayEqual([1, 2, 3], [1, 2, 3]));
  });

});


