// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅️ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🔴️ Assertion Failed: " + actual + " !== " + expected);

  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("cat", "dog");
assertEqual("dog", "dog");
assertEqual(1, 1);
assertEqual(1, 4);