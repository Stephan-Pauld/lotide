const assertEqual = require('./assertEqual');

function head(arr){
  if (arr.length === 0) {
    return undefined;
  } else {
    return arr[0];
  }
  
};


assertEqual(head([5,6,7]), 5);
assertEqual(head([]), undefined);