const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴️ Assertion Failed: ${actual} !== ${expected}`);

  }
};

const flatten = function(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (const item in arr[i]) {
        newArr.push(arr[i][item]);
      }
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
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

console.log(flatten([1, 2, [3, 4], 5, [6]]));
