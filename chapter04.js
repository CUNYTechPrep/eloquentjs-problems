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
  var rangeValue = [];
  if(step >= 0) {
    for(var i = start; i <= end; i+=step) {
      rangeValue.push(i);
    }
  }
  else {
    for(var i = start; i <= end; i+=step) {
      rangeValue.push(i);
    }
  }
  return rangeValue;
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
  var reversedArray = [];
  for (var i = array.length - 1; i >= 0; i--){
      reversedArray.push(array[i]);
  }
  return reversedArray;
}

function reverseArrayInPlace(array) {
  // Your code here
  array = array.reverse();
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  var list = undefined;
  for(var i = array.length-1; i >=0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  // Your code here
  var array = [];
  for (var node = list; node; node = node.rest) {
      array.push(node.value);
    }
  return array;
}

function nth(list, position) {
  // Your code here
  var element = undefined;
  for(var node = list, count = 0; node ; node = node.rest, count++){
      if(count === position) {
          element = node.value;
        }
    }
  return element;
}

function prepend(element, list) {
  // Your code here
  return { value: element, rest: list};
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
  var equal = true;
    if((typeof(value1) == "object" && typeof(value2) == "object") && (value1 != null || value2 != null)) {
      for (var item in value2) {
          if(value2[item] != value1[item]) {
              equal = false; 
            }
        }
    }
  return equal;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};


