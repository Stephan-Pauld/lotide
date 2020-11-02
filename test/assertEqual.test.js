const assert = require('chai').assert
const assertEqual = require('../assertEqual');

describe("#AssertEq", () => {

  it("returns 3 for 3", () => {
    assert.strictEqual(assertEqual(3, 3)); 
  });

});