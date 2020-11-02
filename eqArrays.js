const assertEqual = require('./assertEqual');

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



module.exports = eqArrays;