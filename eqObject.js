const assertEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (const element of Object.keys(object1)) {

    if (Object.keys(object2).includes(element)) {

      if (object1[element] === object2[element]) {

      } else if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {

        if (eqArrays(object1[element], object2[element])) {
          
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(cd, cd2); // => false