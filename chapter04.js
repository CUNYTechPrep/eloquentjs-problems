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
  var container = new Array();
    var index = 0;
    if (start === end ) {
      contianer[0] = start;
    }
    else if (step === 0) {
      return container;
    }
    else if (typeof step === "number") {
           if (start > end && step < 0) {
          for(var i = start; i >= end; i += step) {
                container[index] = i;
                  index++;
            }
        }
            else if (start < end && step > 0) {
                for(var i = start; i <= end; i += step) {
                container[index] = i;
                  index++;
            }
      }
      else {
        return container;
      }
    }
    else {
      for (var i = start; i <= end; i++){
          container[index] = i;
            index++;
        }
    }
  
  return container;
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
  var result = new Array();
  for (var i = 0; i < array.length; i++) {
      result[i] = array[array.length - i - 1];
    }
  return result;
}

function reverseArrayInPlace(array) {
  // Your code here
    var hold;
    for (var i = 0; i < array.length/2; i++) {
      hold = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = hold;
    }
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
      var list = {
      value:null,
        rest:null,
    };
    var current = list;
  for(var i = 0; i <array.length; i++) {
      current.value = array[i];
        var new_list = {
          value: null,
            rest:null
        }
        if (i !== array.length - 1) {
          current.rest = new_list;
          current = current.rest;
        }
    }
  return list;
}

function listToArray(list) {
  // Your code here
  var result = [];
    for (var i = list; i !== null; i = i.rest) {
      result.push(i.value);
    }
    return result;
}

function nth(list, position) {
  // Your code here
  if (position < 0) {
      return [];
    }
    var result;
    var cur_list = list
  while (position != -1) {
      result = cur_list.value;
      cur_list = cur_list.rest;
      position--
    }
    return result;
}

function prepend(element, list) {
  // Your code here
    var list = {
      value:element,
        rest:list
    }
    return list;
}

// Problem 4: Deep comparison
function deepEqual(a, b) {
  // Your code here
  if(typeof a !== "object" && typeof b !== "object") {
      if( a === b) {
        return true;
        }
        else {
          return false;
        }
    }
    else if ((typeof a === "object" && a !== null) && (typeof b === "object" && b !== null)) {
      var result = true;
        var count_a = 0;
        var count_b = 0;
        for (var p in a) {
          count_a++;
        }
        for (var p in b) {
          count_b++;
        }
        if (count_a === count_b) {
          for (var p in a) {
              if(b.hasOwnProperty(p)) {
                  return result && deepEqual(a[p], b[p]);
                }
                else {
                  return false;
                }
            }
        }
        else {
          return false;
        }
    }
    else {
      return false;
    }
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
