const middle = function(array) {
  let length = array.length - 1;
  let middle = Math.round(length / 2);
  let newArr = [];
  if (array.length <= 2) {
    return [];

  } else if (!(length % 2 === 0)) {
    newArr.push(array[middle -1]);
    newArr.push(array[middle]);
    return newArr;

  } else {
    return array[middle];
  }
};

module.exports = middle;