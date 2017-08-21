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
  var list = [];
    if(step > 0) {
        for(var i = start; i <= end; i+=step)
            list.push(i);
    } else if(step < 0) {
        for(var i = start; i >= end; i+=step)
            list.push(i);
    } else {
        return null;
    }
    return list;
}

function sum(array) {
  // Your code here
  var result = 0;
    for(var i = 0; i < array.length; i++)
        result += array[i];
    return result;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
  var list = [];
    for(var i = array.length-1; i >= 0; i--)
        list.push(array[i]);
    return list;
}

function reverseArrayInPlace(array) {
  // Your code here
  var i = 0;
    var j = array.length - 1;
    while(j > i) {
        var temp = array[j];
        array[j] = array[i];
        array[i] = temp;
        i++;
        j--;
    }
    return array;
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  var list = null;
    for(var i = array.length-1; i >= 0; i--) {
        list = {
            value: array[i],
            rest: list
        }
    }
    return list;
}

function listToArray(list) {
  // Your code here
  var array=[];
    for(var node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function nth(list, position) {
  // Your code here
  var node = list;
    for(var i = 0; i < position; i++) {
        node = node.rest;
    }
    return node.value;
}

function prepend(element, list) {
  // Your code here
  var newList = {
        value: element,
        rest: list
    }
    return newList;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
  if(obj1 === obj2)
        return true;
    
    if(typeof obj1 == "object" && obj1 != null &&
      typeof obj2 == "object" && obj2 != null) {
        var check = true;
        for(var property in obj1) {
            if(obj1.hasOwnProperty(property)) {
                check = deepEqual(obj1[property],obj2[property]);
            }
            if(check == false)
                return false;
        }
        return true;
    }
    return false;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
