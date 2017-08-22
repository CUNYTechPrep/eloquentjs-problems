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
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
return array;
}

function sum(array) {
  // Your code here
   var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
return total;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
  var output = [];
  for (var i = array.length - 1; i >= 0; i--)
    output.push(array[i]);
return output;
}

function reverseArrayInPlace(array) {
  // Your code here
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
return array;
}

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
  return {value: element, rest: list};
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
  if (obj1 === obj2) return true;
  
  if (obj1 == null || typeof obj1 != "object" ||
      obj2 == null || typeof obj2 != "object")
    return false;
  
  var propsInA = 0, propsInB = 0;

  for (var prop in obj1)
    propsInA += 1;

  for (var prop in obj2) {
    propsInB += 1;
    if (!(prop in obj1) || !deepEqual(obj1[prop], obj2[prop]))
      return false;
  }

return propsInA == propsInB;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
