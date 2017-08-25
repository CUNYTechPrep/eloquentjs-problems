/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
  var result = [];
  if(start <= end) {
    for(var i = start; i <= end; i += step) {
    	result.push(i);
    }
  } else {
    for(var i = start; i >= end; i += step) {
    	result.push(i);
    }
  }
  return result;
}

function sum(array) {
  var total = 0;
  for(var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

// Problem 2: Reversing an Array
function reverseArray(inputArray) {
  var reversedArray = [];
  // looping backwards and pushing the elements to a new array
  for(var i = inputArray.length-1; i >= 0; i--) {
  	reversedArray.push(inputArray[i]);
  }
  return reversedArray;
}

function reverseArrayInPlace(inputArray) {
  var midIndex = Math.floor(inputArray.length / 2) - 1;
  var lastIndex = inputArray.length - 1;
  // swapping elements at the ends until reaching midpoint
  for(var i = 0; i <= midIndex; i++) {
    var temp = inputArray[i];
    inputArray[i] = inputArray[lastIndex - i];
    inputArray[lastIndex - i] = temp;
  }
  return inputArray;
}

// Problem 3: A List
function arrayToList(array) {
  var list = null;
  // loop the array backward and keep adding elements to the head of the list
  for(var i = array.length-1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  var array = [];
  var node = list;	// start at the head of the list
  // loop until the end of the list
  while(node !== null) {
    // push each node value into the array
    array.push(node.value);
    // moving to the next node
    node = node.rest;
  }
  return array;
}

function nth(list, position) {
  // if the list is null, then there's no value so return undefined
  if(list === null)
    return undefined;
  // else if the position reached is 0, then we retrieve the value from the node
  else if(position === 0)
    return list.value;
  // else, we recur starting from the next node, and lowering the position
  return nth(list.rest, --position);
}

function prepend(element, list) {
  return {value: element, rest: list};
}

// Problem 4: Deep comparison
function deepEqual(x, y) {
  // if both inputs are objects and not null
  if(typeof x === "object" && x !== null && typeof y === "object" && y !== null) {
    // check if both objects have the same number of properties
    if(Object.keys(x).length !== Object.keys(y).length)
      return false;
    // if they do, then loop through each property
    for(var k in x) {
      // make sure y has that property as well
      if(!y.hasOwnProperty(k))
        return false;
      // do a recursion on the property's value
      if(!deepEqual(x[k], y[k]))
        return false;
    }
  }
  // else if x and y are not objects but not equal, return false
  else if(x !== y)
    return false;
  // else, the two inputs are equal so return true
  return true;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
