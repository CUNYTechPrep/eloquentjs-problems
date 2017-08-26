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
  
      if (!step) {
          step = 1;
      }
  
      if (step < 0) {
          for (i = start; i >= end; i += step) {
              result.push(i);
          }
      }
      else {
          for (i = start; i <= end; i += step) {
              result.push(i);
          }
      }
      return result;
}

function sum(array) {
  var total = 0;
  
      array.forEach(function(x) {
          total += x;
      });
  
      return total;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  var result = [];
  
      for (var i = array.length - 1; i >= 0; i--) {
          result.push(array[i]);
      }
  
  return result;
}

function reverseArrayInPlace(array) {
  // store the length of array for convenience
  var len = array.length - 1;
  
      for (var i = 0; i < array.length / 2; i++) {
          var temp = array[i];
          array[i] = array[len - i];
          array[len - i] = temp;
      }
  
      return array;
}

// Problem 3: A List
function arrayToList(array) {
  var result = null;
  
    for (var i = array.length - 1; i >= 0; i--) {
      result = prepend(array[i], result);
    }
  
    return result;
}

function listToArray(list) {
  var result = [];
  
    // iterate through our list
    for (var cursor = list; cursor != null; cursor = cursor.rest) {
      result.push(cursor.value);
    }
  
    return result;
}

function nth(list, position) {
  // Base Case: Returns Value of First Index
  if (position == 0) {
    return list.value;
  }
  
  for (var cursor = list; cursor; cursor = cursor.rest) {
    return nth(cursor.rest, position - 1);
  }
}

function prepend(element, list) {
  var result = {
    value: element,
    rest: list
  };

  return result;
}

// Problem 4: Deep comparison
function deepEqual(a, b) {
  // Your code here
  // check for identity
  if (a === b) {
    return true;
  }

  // compare two objects by properties, only if they're both not null
  if (isNotNull(a) && isNotNull(b)) {

    // compare all the properties in a
    for (var prop in a) {
      // if b is missing one of a's props...
      if (!b.hasOwnProperty(prop)) {
        // return false
        return false;
      }

      // if the property values aren't equal...
      if (!deepEqual(b[prop], a[prop])) {
        return false;
      }
    }

    // compare all the properties in b
    for (var prop in b) {
      // if a is missing one of b's props...
      if (!a.hasOwnProperty(prop)) {
        // return false
        return false;
      }

      // if the property values aren't equal...
      if (!deepEqual(a[prop], b[prop])) {
        return false;
      }
    }

    // if we get to this point, we're pretty confident they're the same
    return true;

  }

  // all others are false
  return false;
}

// -----------------------------------------------------------------------------
// Helper Functions for Deep Comparison
// -----------------------------------------------------------------------------

// Write a function, `isNotNull`, that takes an element and returns true if the
// element is an object and is not null
function isNotNull(element) {
  return typeof element == "object" && element != null;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
