const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴️ Assertion Failed: ${actual} !== ${expected}`);

  }
};


const eqArrays = function(arr1, arr2)  {
  let index = 0;

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let digit in arr1) {

    if (arr1[digit] === arr2[index]) {
      index ++;

    } else {
      return false;
    }
  }
  return true;
};

const without = function(arr1, arr2)  {
  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr1.includes(arr2[i])) {
      console.log(`Removing ${arr2[i]}`);
    } else {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

