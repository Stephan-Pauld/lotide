const words = ["ground", "control", "to", "major", "tom"];
const nums = [1, 4, 9, 16];

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

const map = function(arr, callback)  {
  const results = [];

  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

const result1 = map(words, x => x[0]);
// console.log(result1);
const result2 = map(nums, y => y * 2);
// console.log(result2);

assertArraysEqual(result1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(result2, [2, 8, 18, 32]);
assertArraysEqual(result2, [2, 8, 18, 12]);



// ### Sean Sullivan Helped with different types of functions / arrow functions

// const arrowFunction = function(x) {
//   return x[0];
// }


// const result3 = map(words, arrowFunction)

// const result2 = map(words, (x) => {
//   return x[0]
// });

// x => x[0]
// const arrowFunction = x => x[0]

// const numbers = [1, 2, 3]

// const second = function(nums) {
//   return nums[1];
// };