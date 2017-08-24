/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
  var arr = [];
  if (step == null)
    step = 1;

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      arr.push(i);
  }
  else {
    for (var i = start; i >= end; i += step)
      arr.push(i);
  }
  return arr;
}

function sum(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
  result += array[i];
  }
  return result;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  var newArray = [];
  for (var i = array.length-1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  var arrayLength = array.length;
  var midpoint = Math.floor(arrayLength/2);
  for (var i = 0; i < midpoint; i++) {
    var temp = array[i];
    array[i] = array[arrayLength - 1 - i];
    array[arrayLength - 1 - i] = temp;
  }
}

// Problem 3: A List
function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

function listToArray(list) {
  var myArray = [];
  for (var node = list; node; node = node.rest)
    myArray.push(node.value);
  return myArray;
}

function nth(list, position) {
  if (!list)
    return undefined;
  else if (position == 0)
    return list.value;
  else
    return nth(list.rest, position - 1);
}

function prepend(element, list) {
    return {value: element, rest: list};
}

// Problem 4: Deep comparison
function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  
  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
}

// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};



