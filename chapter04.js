/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
    if (step == null) step = 1;
  var return_array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      return_array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      return_array.push(i);
  }
  return return_array;
}

function sum(array) {
  // Your code here
    var local_sum = 0;
  for (var i = 0; i < array.length; i++)
    local_sum += array[i];
  return local_sum;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
    var return_var = [];
  for (var i = array.length - 1; i >= 0; i--)
    return_var.push(array[i]);
  return return_var;
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
    var my_list = null;
  for (var i = array.length - 1; i >= 0; i--)
    my_list = {value: array[i], rest: my_list};
  return my_list;
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
  // Your code here
    if (obj1 === obj2) return true;
  
  if (obj1 == null || typeof a != "object" ||
      obj2 == null || typeof b != "object")
    return false;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
