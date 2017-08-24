/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step = 1) {
    let array = [];

    if (step === undefined)
        step = 1;

    if (start < end) {

        for (let i = start; i <= end; i += step) {
            array.push(i);
        }

    } else {

        for (let i = start; i >= end; i += step) {
            array.push(i);

        }

    }

    return array;
}

function sum(arr) {
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
        answer += arr[i];
    }
    return answer;
}

// Problem 2: Reversing an Array
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }

    return reversed;
}

function reverseArrayInPlace(arr) {
    let len = arr.length - 1
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[len - i];
        arr[len - i] = temp;
    }
}

// Problem 3: A List
function arrayToList(arr) {
    let list;

    for (let i = arr.length - 1; i >= 0; i--) {
        list = {
            value: arr[i],
            rest: list
        };
        if (i == arr.length - 1) {
            list.rest = null;
        }

    }

    return list;
}

function listToArray(list) {
    let arr = [];
    for (let i = list; list; list = list.rest) {

        arr.push(list.value);

    }

    return arr;
}

function nth(list, position) {
    let x = 0;
    for (let i = list; list; list = list.rest) {
        if (x == position) {
            return list.value;
        } else {
            x++;
        }
    }
}

function prepend(element, list) {
    let newList = {
        value: element,
        rest: list
    }
    return newList
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
    if (typeof obj1 === 'object' && typeof obj2 === 'object') {
        for (var value in obj1) {
            if (obj2.hasOwnProperty(value)) {
                let contains = deepEqual(obj1[value], obj2[value])
                if (contains) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    } else {
        if (obj1 === obj2) {
            return true;
        } else {
            return false;
        }
    }
    return true;
}


// Do not modify below here.
module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    nth,
    prepend,
    deepEqual
};
