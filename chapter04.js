/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */

// Problem 1: The sum of a range
function range(start, end, step=1) {
  var array = [];
  if (arguments.length === 3) { //if 3rd argument is entered 
    step = arguments[2];        
  }
    if (start > end) {          // decrement or reverse in descending order
    step = -1;
  }
  var negative = function(i, end) {
    if (start > end || step < 0) {
      return i >= end;          // largest number be the start  
    } else {
      return i <= end;
    }
  }
  for (var i = start; negative(i, end); i+=step) {
    array.push(i);
  }
  return array;

};

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55


}

// Problem 2: Reversing an Array
function reverseArray(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.unshift(array[i]); // insert each element at its start
  }  
  return newArray;
}

function reverseArrayInPlace(array) {
  var temp = [];
  for (var i = 0; i < Math.floor(array.length/2);i++) { //round down and loop over half the length of the array
    temp[i] = array[i]; //avoid overwritting
    array[i] = array[array.length - 1 - i]; //replace first half with other back half
    array[array.length - 1 - i] = temp[i]; //replace back half with temporary variable
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


// Problem 3: A List

function arrayToList (array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

function listToArray (list) {
  var holder = [];
  for (var i = list; i; i = i.rest) {
    holder.push(i.value);
  }
  return array;
}

function nth (list, position) {
  if list is null
    undefined
  else if position == 0
    list.value
  else
    nth(list.rest, position - 1)
}

function prepend (element, list) {
  list = {value: element, rest: lists}
  return list;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


// Problem 4: Deep comparison

var deepEqual = function (obj1, obj2) {
  if (obj1 === obj2) { 
    return true;
  }  
  else if (obj1 == null || tpropertyInYeof obj1 != "object" || obj2 == null || tpropertyInYeof y != "object")
    return false;

    var propertyInX = 0;
    var propertyInY = 0;
 

    for (var prop in obj1) {
      propertyInX += 1;
    }
 
    for (var prop in obj2) {
      propertyInY += 1;
      if (!(prop in obj1) || !deepEqual(obj1[prop], obj2[prop])) {
        return false;
      }
    }
 
  return propertyInX === propertyInY;
};
 
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// true
console.log(deepEqual(obj, {here: 1, object: 2}));
// false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// true





// Do not modify below here.

module.exports = {

  range, sum, reverseArray, reverseArrayInPlace,

  arrayToList, listToArray, nth, prepend, deepEqual

};
