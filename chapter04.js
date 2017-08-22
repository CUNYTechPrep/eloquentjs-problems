/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
    if (step == 0) {
        step = 1;
    }
    var arr = [];
    if (step >=1) {
        for(var i=start; i<=end; i+=step)
            arr.push(i);
    }
    else {
        for(var i=start; i>=end; i+=step)
            arr.push(i);
    }
    return arr;
}

function sum(array) {
    var sum = 0;
    for(var i=0; i<array.length; i++)
        sum += array[i]
    return sum;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
    var reversed = [];
    var last = array.length - 1
    for(var i = last; i >= 0; i--) { 
        reversed.push(array[i]);
    }
    return reversed;
}

function reverseArrayInPlace(array) {
    var mid = array.length / 2;
    for(var i=0; i<=mid; i++){
        var temp = array[i];
        var opp_index = array.length-1-i;
        array[i] = array[opp_index];
        array[opp_index] = temp;
    }
    return array;
}

// Problem 3: A List
function arrayToList(array) {
    var list = null;
    for(var i=array.length-1; i>=0; i--){
        list = prepend(array[i], list)
    }
    return list;
}

function listToArray(list) {
    var arr = [];
    for(var node=list; node; node=node.rest) {
        arr.push(node.value);
    }
    return arr;
}

function nth(list, position) {
    var count = 0;
    for(var node=list; node; node=node.rest) {
        if(count == position)
            return node.value;
        count ++;
    }
    return undefined;
}

function prepend(element, list) {
    var new_list = {
        'value': element,
        'rest': list
    }
    return new_list;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
