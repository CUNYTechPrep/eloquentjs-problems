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
  let arr = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  }

  if (step < 0) {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }

  return arr;

}

function sum(array) {
  // Your code here
  let sum = 0;
  array.forEach((x) => { sum += x;});

  return sum;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
  let arr = [];
  const arrayLength = array.length;

  for (let i = arrayLength - 1; i >= 0; i -= 1) {
    arr.push(array[i]);
  }
  
  return arr;
}

function reverseArrayInPlace(array) {
  // Your code here
  const arrLength = array.length;
  for (let s = 0, e = arrLength-1; s < e;) {
    let a = array[s];
    array[s] = array[e];
    array[e] = a;

    s += 1;
    e -= 1;
  }

  return array;
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  var v = array[0];
  array.splice(0, 1);

  if (array.length === 0) {
    return {value: v, rest: null};
  }

  return {value: v, rest: arrayToList(array)}
}

function listToArray(list) {
  // Your code here
  var arr  = [];
  while (list !== null) {
    arr.push(list.value)
    list = list.rest;
  }

  return arr;
}

function nth(list, position) {
  // Your code here
  if (list === null) {
    return null;
  }
  if (position === 0) {
    return list.value;
  }

  list = list.rest;
  position -= 1;
  return nth(list, position);
}

function prepend(element, list) {
  // Your code here
  var head = {value: element, rest: list};

  return head;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
  if ((typeof(obj1) === "object" && typeof(obj1) !== null) && (typeof(obj2) === "object" && typeof(obj2) !== null)) {
    for (var x in obj1) {
      if (obj2.hasOwnProperty(x)) {
        if (!deepEqual(obj1[x], obj2[x])) {
          return false;
        }
      } else {
        return false;
      }
    } 
  } else if (obj1 !== obj2) {
    return false;
  }
  return true;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};