/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
  let result = [];
  if (!step) {
      step = 1;
  }
  if (step < 0) {
    for (i = start; i >= end; i += step) {
      result.push(i);
    }
  }
  else {
    for (i = start; i <= end; i += step) {
      result.push(i);
    }
  }
  return result;
}

function sum(array) {
  let total = 0;
  array.forEach( (x) => { total += x; });
  return total;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}

function reverseArrayInPlace(array) {
  let l = array.length - 1;
  for (let i = 0; i < array.length / 2; i++) {
    let temp = array[i];
    array[i] = array[l - i];
    array[l - i] = temp;
  }
  return array;
}

// Problem 3: A List
function arrayToList(array) {
  let result = null;
  for (let i = array.length - 1; i >= 0; i--) {
    result = prepend(array[i], result);
  }
  return result;
}

function listToArray(list) {
  let result = [];
  for (let cursor = list; cursor != null; cursor = cursor.rest) {
    result.push(cursor.value);
  }
  return result;
}

function nth(list, position) {
  if (position == 0) {
    return list.value;
  }
  for (let cursor = list; cursor; cursor = cursor.rest) {
    return nth(cursor.rest, position - 1);
  }
}

function prepend(element, list) {
  let result = {
    value: element,
    rest: list
  };
  return result;
}

// -=-=-=-=-= helper func
function isValid(element) {
  return typeof element == "object" && element != null;
}
// -=-=-=-=-=-

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  else if (isValid(obj1) && isValid(obj2)) {
    for (let prop in obj1) {
      if (!obj2.hasOwnProperty(prop)) {
        return false;
      }
      if (!deepEqual(obj2[prop], obj1[prop])) {
        return false;
      }
    }
    for (let prop in obj2) {
      if (!obj1.hasOwnProperty(prop)) {
        return false;
      }
      if (!deepEqual(obj1[prop], obj2[prop])) {
        return false;
      }
    }
    return true;
  }
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
