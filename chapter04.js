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
    for (let i = start; i <= end; i+=step) { 
      array.push(i);
    } 
  }
  if (start > end) {
    for (let i = start; i >= end; i+=step) { 
      array.push(i);
    } 
  }
  return array;
}

function sum(array) {
  num = 0;
  for (let i = 0; i < array.length; i++) {
    num += array[i];
  }
  return num;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  newArray = [];
  for (let i = array.length-1; i >= 0; i--) {
  	newArray.push(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  let len = array.length, temp = 0;
  for (let i = 0; i < len/2; i++) {
    temp = array[i];
  	array[i] = array[(len-1)-i];
    array[(len-1)-i] = temp;
  }
  arrayValue = array;
}

// Problem 3: A List
function arrayToList(array) {
  let list = null;
  for (let j = array.length - 1; j >= 0; j--) {
  	list = { value: array[j], rest: list, };
  }
  return list;
}

function listToArray(list) {
  let array = [];
  while(list) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}

function nth(list, position) {
  let n = 0;
  while (n < position && list) {
    list = list.rest;
    n++;
  }
  return list.value;
}

function prepend(element, list) {
  const newList = {
    value: element,
    rest: list
  };
  return newList;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  if (typeof obj1 !== typeof obj2) return false;
  else if (obj1 == obj2) return true;
  deepEqual(obj1.rest, obj2.rest);
  return false;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
