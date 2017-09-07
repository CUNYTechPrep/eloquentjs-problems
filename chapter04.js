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
    let arr = [];
    if (step >=1) {
        for(let i=start; i<=end; i+=step)
            arr.push(i);
    }
    else {
        for(let i=start; i>=end; i+=step)
            arr.push(i);
    }
    return arr;
}

function sum(array) {
    let sum = 0;
    for(let i=0; i<array.length; i++)
        sum += array[i]
    return sum;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
    let reversed = [];
    let last = array.length - 1
    for(let i = last; i >= 0; i--) { 
        reversed.push(array[i]);
    }
    return reversed;
}

function reverseArrayInPlace(array) {
    let mid = array.length / 2;
    for(let i=0; i<=mid; i++){
        let temp = array[i];
        let opp_index = array.length-1-i;
        array[i] = array[opp_index];
        array[opp_index] = temp;
    }
    return array;
}

// Problem 3: A List
function arrayToList(array) {
    let list = null;
    for(let i=array.length-1; i>=0; i--){
        list = prepend(array[i], list)
    }
    return list;
}

function listToArray(list) {
    let arr = [];
    for(let node=list; node; node=node.rest) {
        arr.push(node.value);
    }
    return arr;
}

function nth(list, position) {
    let count = 0;
    for(let node=list; node; node=node.rest) {
        if(count == position)
            return node.value;
        count ++;
    }
    return undefined;
}

function prepend(element, list) {
    let new_list = {
        'value': element,
        'rest': list
    }
    return new_list;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
    //Check if identical
    if (obj1 === obj2) {
        return true;
    }

    //Check type and nulls
    if (obj1 == null || obj2 == null || typeof(obj1) != "object" || typeof(obj2) != "object") {
        return false;
    }

    //Check length
    if (Object.keys(obj1).length != Object.keys(obj2).length) {
        return false;
    }
    //Deep comparison
    for(item in obj1) {
        if (obj2.hasOwnProperty(item)) {
            if ( !(deepEqual(obj1[item], obj2[item]))) {
                return false;
            }
        }
    }
    return true;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
