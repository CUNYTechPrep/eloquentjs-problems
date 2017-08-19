/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
  var nums = [];
  if(start < end) {
    for(var i = start; i <= end; i += step) {
      nums.push(i);
    }
  }
  else if(start > end ) {
    for(var i = start; i >= end; i += step) {
      nums.push(i);
    }
  }
  return nums;
}

function sum(nums) {
  var total = 0;
  for(var i in nums) {
    total += nums[i];
  }
  return total;
}

// Problem 2: Reversing an Array
function reverseArray(anArray) {
  var revArray = [];
  for(var i = anArray.length - 1; i >= 0; i--) {
    revArray.push(anArray[i]);
  }
  return revArray;
}

function reverseArrayInPlace(anArray) {
  var anotherArray = anArray.slice();
  for(var i = anotherArray.length - 1, j = 0; i >= 0; i--, j++) {
    anArray[j] = anotherArray[i];
  }
}

// Problem 3: A List
function arrayToList(anArray) {
  var list = null;
  for (var i = anArray.length - 1; i >= 0; i--) {
    list = {value: anArray[i], rest: list};
  }
  return list;
}

function listToArray(anList) {
  var anArray = [];
  for(var node = anList; node; node = node.rest) {
    anArray.push(node.value);
  }
  return anArray;
}

function nth(anList, num) {
  if(!anList)
    return undefined;
  else if(num === 0) 
    return anList.value;
  else
    return nth(anList.rest, num - 1);
}

function prepend(element, anList) {
  return {value: element, rest: anList};
}

// Problem 4: Deep comparison
function deepEqual(a, b) {
  if(a === b)
    return true;

  if(a == null || b == null || typeof a != "object" || typeof b != "object")
    return false;

  for(var prop in a) {
    if(!prop in b || !deepEqual(a[prop], b[prop]))
        return false;
  }

  var numOfPropA = Object.keys(a).length;
  var numOfPropB = Object.keys(b).length;
  
  return numOfPropA == numOfPropB;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
