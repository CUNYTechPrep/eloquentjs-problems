/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
  const max = Math.floor((end - start) / step) + 1;
  return Array(max).fill().map((_, index) => start + (index * step));
}


function sum(array) {
  let sum = 0;
  array.forEach(element => sum += element);
  return sum;
}


// Problem 2: Reversing an Array
function reverseArray(array) {
  let newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}


function reverseArrayInPlace(array) {
  let mid = Math.floor(array.length / 2);
  let temp;
  for (var i = 0; i < mid; i++) {
    temp = array[array.length - 1 - i];
    array[array.length - 1 - i] = array[i];
    array[i] = temp;
  }
}


// Problem 3: A List
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest:list};
  }
  return list;
}


function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}


function nth(list, position) {
  if (!list)
      return undefined;
  else if (position === 0)
      return list.value;
  else
      return nth(list.rest, position - 1);
}


function prepend(element, list) {
  return { value: element, rest: list };
}


// Problem 4: Deep comparison
function deepEqual(a, b) {
  if (a === b)
    return true;

  let propCountA = Object.keys(a).length;
  let propCountB = Object.keys(b).length;

  // if one of the parameters is null, not an object or has mismatched number of properties
  if (a === null || b === null || typeof a !== "object" || typeof b !== "object" || propCountA !== propCountB)
    return false;

  for (let property in a)
      return deepEqual(a[property], b[property]);
 } 


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
