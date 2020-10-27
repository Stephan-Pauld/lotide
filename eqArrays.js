const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴️ Assertion Failed: ${actual} !== ${expected}`);

  }
};


const eqArrays = function(arr1, arr2)  {
  let index = 0;
  for (let digit in arr1){

    if (arr1[digit] === arr2[index]){
      index++

    } else {
      return false;
    }
  }
  return true;
};

