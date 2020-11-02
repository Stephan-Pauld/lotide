const assert = require('chai').assert
const tail = require('../tail');

describe("#tail, () => {

  it("returns should return cart", () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs", "cart"]), "cart"); 
  });
});