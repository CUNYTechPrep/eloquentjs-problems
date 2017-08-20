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
  var ret = [];
      var inc = 1;
    
    if (arguments.length > 2) {
        inc = step;
      } else if (start > end) {
        inc *= -1;
      }
    
    if (start > end) { 
        for (var i = start; i >= end; i+=inc)
            ret.push(i);
    } else {
        for (var i = start; i <= end; i+=inc)
            ret.push(i);
    }
    return ret;
}

function sum(array) {
  // Your code here
  sum = 0;
    
    for(var i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
  ret = [];

    for (var i = array.length-1; i >= 0; i--) {
      ret.push(array[i]);
    }
  return ret;
}

function reverseArrayInPlace(array) {
  // Your code here
  var temp;
    for (var i = 0; i < (array.length/2); i++) {
      temp = array[i];
      array[i] = array[array.length-1-i]
      array[array.length-1-i] = temp;
  }
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  var ret = {
      value: null,
      rest: null
    };
    var temp = ret;

    for (var i = 0; i < array.length; i++) {
      temp.value = array[i];
      if (i+1 < array.length) {
        temp.rest = new Object();
      } else {
       temp.rest = null;
      }
      temp = temp.rest;
    }
  return ret;
}

function listToArray(list) {
  // Your code here
  var temp = list;
      var ret = [];
      while(temp !== null) {
        ret.push(temp.value);
        temp = temp.rest;
      }
  return ret;
}

function nth(list, position) {
  // Your code here
  if(position === 0)
      return list.value;
    else
      return nth(list.rest, position-1);
}

function prepend(element, list) {
  // Your code here
  var ret = {
        value: element,
        rest: list
      };
  return ret;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
  if (obj1 === obj2) {
        return true;
      }
      if (typeof obj1 === typeof obj2) {
      if (typeof obj1 === "object") {
              if (obj1 === null) {
                return false;
              }
            for (var prop in obj1) {
                if (obj2.hasOwnProperty(prop)) {
                  if (deepEqual(obj1[prop], obj2[prop])) { 
                        continue; 
                      }
                  else { return false; }
              } else {
                  return false;
                }
            }
        }
      } else {
        return false;
      }
  return true;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
