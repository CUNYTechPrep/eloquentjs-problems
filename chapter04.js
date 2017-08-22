/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
  array = [];
  if (start < end) {
    for (i = start; i <= end; i+=step) { 
      array.push(i);
    } 
  }
  if (start > end) {
    for (i = start; i >= end; i+=step) { 
      array.push(i);
    } 
  }
  return array;
}

function sum(array) {
  num = 0;
  for (i = 0; i < array.length; i++) {
    num += array[i];
  }
  return num;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
}

function reverseArrayInPlace(array) {
  // Your code here
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
}

function listToArray(list) {
  // Your code here
}

function nth(list, position) {
  // Your code here
}

function prepend(element, list) {
  // Your code here
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
