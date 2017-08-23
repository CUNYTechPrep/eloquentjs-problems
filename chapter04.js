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
  var result = [];
  var step2 = 1;
  if (arguments.length === 3) {
    step2 = arguments[2];
  }

  if (start > end && step2 > 0) {
    step2 = -1;
  }

  if (start < end) {
    for (var i = start; i <= end; i += step2) {
      result.push(i);
    }
  } else {
    for (var i = start; i >= end; i += step2) {
      result.push(i);
    }
  }
  return result;
}

function sum(array) {
  // Your code here
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
  var result = [];
  for (var i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}

function reverseArrayInPlace(array) {
  // Your code here
  var temp;
  for (var i = 0; i < Math.floor(array.length/2); i++) {
    temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  var list = {};
  var temp = list;
  for (var i = 0; i < array.length; i++) {
    temp.value = array[i];
    if (i + 1 < array.length) {
      temp.rest = new Object(); 
    } else {
      temp.rest = null;
    }
    temp = temp.rest;
  }
  return list;
}

function listToArray(list) {
  // Your code here
  var result = [];
  while (list !== null) {
    result.push(list.value);
    list = list.rest;
  }
  return result;
}

function nth(list, position) {
  // Your code here
  if (position === 0) {
    return list.value;
  } else {
    return nth(list.rest, position - 1);
  }
}

function prepend(element, list) {
  // Your code here
  return { value: element, rest: list };
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
  if (obj1 === obj2) {
    return true;
  }
  if ((typeof obj1 === typeof obj2) && (typeof obj1 == "object")) {
    if (obj1 === null) {
      return false;
    }
    for (var prop in obj1) {
      if (obj2.hasOwnProperty(prop)) {
        if (deepEqual(obj1[prop], obj2[prop])) {
          continue;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
