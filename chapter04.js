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
  var arr= [];
  //Two Cases
  if(start < end) {
    for(var i=start; i <= end;) {
      arr.push(i);
      i+=step;
    }
    return arr;
  }

  if(start > end) {
    for(var i= start; i >= end;) {
      arr.push(i);
      i+=step;
    }
    return arr;
  }
}

function sum(array) {
  // Your code here
  var result = 0;
  for(var i=0; i < array.length; i++) {
    result+= array[i];
  }

  return result;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
  var result = [];
  for(var i = array.length -1; i >= 0; i--){
    result.push(array[i]);
  }
  return result;
}

function reverseArrayInPlace(array) {
  // Your code here
  var i = 0;
  len = array.length;
  middle = Math.floor(len/2);
  temp = null;

  for(; i < middle; i+= 1) {
    temp = array[i];
    array[i] = array[len-1-i];
    array[len-1-i] = temp;
  }
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  var list = null;
  for(var i = 0; i < array.length; i++) {
    list = prepend(array[array.length -1 -i], list);
  }
  return list;
}

function listToArray(list) {
  // Your code here
  var array = [];
  for(var node = list; node; node = node.rest) {
    array.push(node.value);
  }

  return array;
}

function nth(list, position) {
  // Your code here
  if(list != null) {
      if(position > 0) {
        return nth(list.rest, position -1);
      } else {
        return list.value;
      }
    } else {
      return undefined;
    }
}

function prepend(element, list) {
  // Your code here
  list = {value: element, rest: list};
  return list;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
  if(obj1 === obj2) {
    return true;
  }

  if(typeof obj1 != "object" || typeof obj2 != "object" || obj1 == null || obj2 == null || Object.keys(obj1).length != Object.keys(obj2).length) {
    return false;
  } else {
    for(var prop in obj1)
      return deepEqual(obj1[prop], obj2[prop]);
  }//ELSE
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
