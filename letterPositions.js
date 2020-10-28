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

const letterPositions = function(letters) {
  let newObj = {};

  for (let i = 0; i < letters.length; i++) {
    if (!(newObj[letters[i]] === undefined)) {
      newObj[letters[i]].push(i);
    } else if (newObj[letters[i]] === undefined) {
      newObj[letters[i]] = [i];
    }
  }
  return newObj;
};

assertArraysEqual(letterPositions("hello").e, [1]);