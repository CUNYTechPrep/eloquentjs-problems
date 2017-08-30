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
    
    if (step == undefined) {
        step = 1;
    }
    
    // condition where we get infinite loops, so we return empty array
    if ((start > end && step > 0) || (start < end && step < 0)  || (start === end)) return result;
    
    if (start < end) {
        for (var i = start; i < end+1; i+=step) {
            result.push(i);
        }
    } else {
        for (var i = start; i > end-1; i+=step) {
            result.push(i);
        }
    }
    
    
    return result;
}

function sum(array) {
    var result = 0;
    
    for (var i = 0; i < array.length; i++) {
        result += array[i];
    }
    
    return result;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
    var newArray = [];
    
    for (var i = array.length-1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    
    return newArray;
}

function reverseArrayInPlace(array) {
    var size = array.length;
    var mid = Math.floor(size/2);
    var tmp;
    
    for (var i = 0; i < mid; i++) {
        tmp = array[i];
        array[i] = array[size - 1 - i];
        array[size - 1 - i] = tmp;
    }
    
    return array;
}

// Problem 3: A List
function arrayToList(array) {
    var list = null;
    
    for (var i = array.length-1; i >= 0; i--) {
        list = prepend(array[i], list);
    }
    
    return list;
}

function listToArray(list) {
    var array = [];
    var nodeRef = list;
    
    while (nodeRef !== null) {
        array.push(nodeRef.value);
        nodeRef = nodeRef.rest;
    }
    
    return array;
}

function nth(list, position) {
    var nodeRef = list;
    
    if (position < 0) return undefined;
    
    for (var i = 0; i < position; i ++) {
        if (nodeRef === null) return undefined;
        nodeRef = nodeRef.rest;
    }
    
    if (nodeRef === null) return undefined;
    return nodeRef.value;
}

function prepend(element, list) {
    var newList = {};
    
    newList.value = element;
    newList.rest = list;
    
    return newList;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
    for (var prop1 in obj1) {
        for (var prop2 in obj2) {
            if (prop1 == prop2) {
              if (typeof obj1[prop1] == 'object' && typeof obj2[prop2] == 'object') {
                    return deepEqual(obj1[prop1], obj2[prop2]);
              } else {
                    return obj1[prop1] === obj2[prop2];
              }
            }
        }
    }
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
