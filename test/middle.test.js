const assertArrayEqual = require('../assertArrayEqual')
const assert = require('chai').assert
const middle = require('../middle');

describe("#middle", () => {

  it("should pass assertion", () => {
    assert.strictEqual(assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]));
  });
  it("should pass assertion", () => {
    assert.strictEqual(assertArrayEqual(middle([1, 2]), []));
  });
  it("should pass assertion", () => {
    assert.strictEqual(assertArrayEqual(middle([1, 2, 3, 4, 5]), 3));
  });
  it("should pass assertion when passed array with less than 2 items", () => {
    assert.strictEqual(assertArrayEqual(middle([1]), []));
  });

});