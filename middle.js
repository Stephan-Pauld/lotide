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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴️ Assertion Failed: ${actual} !== ${expected}`);

  }
};

const middle = function(array) {
  let length = array.length - 1;
  let middle = Math.round(length / 2);
  let newArr = [];
  if (!(length % 2 === 0)) {
    newArr.push(array[middle]);
    newArr.push(array[middle -1]);
    return newArr;
  } else {
    return array[middle];
  }
};



console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]));