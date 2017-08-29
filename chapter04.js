/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step = 1) {
  const arr = [];
  let loop = true;
  if (step !== 0) {
    do {
      if (Math.sign(step) > 0) {
        if (start + step > end) loop = false;
      } else {
        if (start + step < end) loop = false;
      }
      arr.push(start);
      start += step;
    } while (loop);
  }
  return arr;
}

function sum(array) {
  return array.reduce((sum, val) => sum + val, 0);
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    arr[i] = array[array.length - 1 - i];
  }
  return arr;
}

function reverseArrayInPlace(array) {
  // return array.reverse();
  const len = array.length;
  if (len == 0) return;
  for (let i = 0; i <= Math.floor(len / 2); i++) {
    [array[i], array[len - 1 - i]] = [array[len - 1 - i], array[i]];
  }
}

// Problem 3: A List
function arrayToList(array) {
  let ref = null;
  array.map(x => ({ value: x, rest: null })).reduce((prev, cur) => {
    if (prev != null) {
      prev.rest = cur;
    } else {
      ref = cur;
    }
    return cur;
  }, null);
  return ref;
}

function listToArray(list) {
  let ref = list,
    arr = [];
  while (ref) {
    arr.push(ref.value);
    ref = ref.rest;
  }
  return arr;
}

function nth(list, position) {
  let ref = list,
    i = 0;
  while (ref && i < position) {
    ref = ref.rest;
    i++;
  }
  return ref.value;
}

function prepend(element, list=null) {
  return {value: element, rest: list};
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  //TODO the right way
  return JSON.stringify(obj1) == JSON.stringify(obj2);
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
