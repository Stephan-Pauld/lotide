const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴️ Assertion Failed: ${actual} !== ${expected}`);

  }
};


const countLetters = function(letters) {
  let digit = letters.split(" ").join("");
  let newObj = {};

  for (let i = 0; i < digit.length; i++) {
    if (newObj[digit[i]] >= 0) {
      newObj[digit[i]] ++;
    } else if (newObj[digit[i]] === undefined) {
      newObj[digit[i]] = 1;
    }
  }
  return newObj;
};
console.log(countLetters("lighthouse labs"));
