/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
  // Your code here
  var array = [];
  for (var i = start; step > 1 || step === undefined ? i <= end : i >= end; step ? i = i + step : i++)
      array.push(i);
  return array;
}

function sum(array) {
  // Your code here
  var result = 0;
  for(var i=0; i<array.length; i++){
    result+=array[i];
  }
  return result;
}

console.log(range(1, 10));
// ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// ? [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// ? 55

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--)
      newArray.push(array[i]);
  return newArray;
}

function reverseArrayInPlace(array) {
  // Your code here
  var index = 0;
  for (var i = 0; i < array.length / 2; i++) {
      index = array[i];
      array[i] = array[array.length - i - 1];
      array[array.length - i - 1] = index;
  } 
}

console.log(reverseArray(["A", "B", "C"]));
// ? ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// ? [5, 4, 3, 2, 1]

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

function listToArray(list) {
  // Your code here
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}

function nth(list, position) {
  // Your code here
  if (!list)
    return undefined;
  else if (position == 0)
    return list.value;
  else
    return nth(list.rest, position - 1);
}

function prepend(element, list) {
  // Your code here
  return {value: value, rest: list};
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code heres
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
