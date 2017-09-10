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
  var numRange = [];
  if(start <= end) {
    
    for(var i = start; i <= end; i+=step) {
      numRange.push(i);
    }
  }
  else {
    for(var j = start; j >= end; j+=step){
      numRange.push(j);
    }
  }
  return numRange;
}

function sum(array) {
  // Your code here
  var total = 0;
  for(var i = 0; i < array.length; ++i) {
    total += array[i];
  }
  return total;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
  var revArr = [];
  for(var i = array.length - 1; i > -1; --i) {
    revArr.push(array[i]);
  }
  return revArr;
}

function reverseArrayInPlace(array) {
  // Your code here
  var temp = 0;
  for(var i = 0; i < array.length / 2; ++i) {
    temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  var list = {};
  var node = list;
  if(array.length > 0) {
    list = {
      value: array[0],
      rest: {}
    };
    node = list;
  }

  for(var i = 1; i < array.length; ++i) {
    if(i != array.length - 1){
      node.rest = {
        value: array[i],
        rest: {}
      };
    }
    else {
      node.rest = {
        value: array[i],
        rest: null
      };
    }
    node = node.rest;
  }

  return list;
}

function listToArray(list) {
  // Your code here
  var array = [];
  
  var ptr = list;
  while(ptr != null) {
    array.push(ptr.value);
    ptr = ptr.rest;
  }
  return array;
}

function nth(list, position) {
  // Your code here
  var ptr = list;
  for(var i = 0; i < position; ++i) {
    if(ptr.rest === null) {
      return undefined;
    }
    else {
      ptr = ptr.rest;
    }
  }
  return ptr.value;
}

function prepend(element, list) {
  // Your code here
  var newList = {
    value: element,
    rest: list
  }
  return newList;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
  for(var prop in obj1) {
    if(typeof obj1[prop] == 'object' && typeof obj2[prop] == 'object') {
      deepEqual(obj1[prop], obj2[prop]);
    }
    else if(obj1[prop] != obj2[prop]) {
      return false;
    }
  }
  return true;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
