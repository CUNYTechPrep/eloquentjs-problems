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
  var rangeArray = [];
  var step = 1;
  // Check if the step argument is given
  if (arguments.length == 3) {
    step = arguments[2];
  }

  if (start >= end) {
    step = -1;
  }

  while (start != end) {
    rangeArray.push(start);
   	start += step;
  }
  rangeArray.push(end);
  return rangeArray;
}

function sum(array) {
  // Your code here
  var arraySum = 0;

  for (var i in array) {
    arraySum += array[i];
  }
  return arraySum;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
  var reversedArray = [];

  	for (var i = array.length-1; i >=0 ; --i) {
      reversedArray.push(array[i]);
    }

  return reversedArray;
}

function reverseArrayInPlace(array) {
  // Your code here
  if (array.length % 2 == 0) {
		for (var i = 0; i < Math.floor(array.length / 2); ++i) {
			var temp = array[i];
          	array[i] = array[array.length-i];
          	array[array.length-i] = temp;
        }
    } else {
      	for (var i = 0; i < array.length / 2; ++i) {
			var temp = array[i];
          	array[i] = array[array.length-i-1];
          	array[array.length-i-1] = temp;
        }
    }
  	return array;
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  var list = null;

  for(var i = array.length-1; i >= 0; --i)
    list = { value: array[i], rest: list };

  return list;
}

function listToArray(list) {
  // Your code here
  var resultArray = [];

  for (var node = list; node; node = node.rest) {
    resultArray.push(node.value);
  }
  return resultArray;
}

function nth(list, position) {
    // Your code here
    if (n === 0) {
      return list.value;
    } else {
      return nth(list.rest, n-1);
    }
}

function prepend(element, list) {
  // Your code here
  return {element: value, rest: rest};
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
  if (obj1 === obj2) {
    return true;
  }

  if (typeof obj1 != "object" || obj1 == null || typeof obj2 != "object" || obj2 == null) {
    return false;
  }

  var numberOfPropertiesInX = 0, numberOfPropertiesInY = 0;
  // Check the number of properties
  for (var i in obj1)
    numberOfPropertiesInX++;

  for (var i in obj2) {
    numberOfPropertiesInY++;

    if (!(i in obj1) || !deepEqual(obj1[i], obj2[i]))
      return false;
  }

  return numberOfPropertiesInX === numberOfPropertiesInY;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
