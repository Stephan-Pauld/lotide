const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴️ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countOnly = function(allItems, itemsToCount) {
  let newObj = {};

  for (let i = 0; i < firstNames.length; i++) {
    if (newObj[firstNames[i]] >= 0) {
      newObj[firstNames[i]] ++;
    } else if (itemsToCount[firstNames[i]]) {
      newObj[firstNames[i]] = 1;
    }
  }
  return newObj;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);