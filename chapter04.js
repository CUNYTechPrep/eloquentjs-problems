/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
var range = function(start, end, step) {
    if (step === undefined) {
        step = 0;
    }

    var myArray = [];

    if (start > end) {
        for (var i = start; i >= end; i--) {
            myArray.push(i);
            if (step !== 0) {
                i += step + 1;
            }
        }
    }

    for (var i = start; i <= end; i++) {
        myArray.push(i);
        if (step !== 0) {
            i += step - 1;
        }
    }

    return myArray;
};

var sum = function(myArray) {
    var accumulator = 0;
    for (var i = 0; i < myArray.length; i++) {
        accumulator += myArray[i];
    }
    return accumulator;
};

// Problem 2: Reversing an Array
var reverseArray = function(myArray) {
    var newArray = [];
    for (var i = myArray.length-1; i >= 0; i--) {
        newArray.push(myArray[i]);
    }
    return newArray;
};

var reverseArrayInPlace = function(myArray) {
    var j = myArray.length-1;
    for (var i = 0; i < myArray.length/2 ; i++) {
        var exchange = myArray[i];
        myArray[i] = myArray[j];
        myArray[j] = exchange;
        j--;
    }
    return myArray;
};

// Problem 3: A List
var arrayToList = function(myArray) {
    var node = null;
    
    for (var i = myArray.length - 1; i >= 0; i--) {
        node = {
            value: myArray[i],
            rest: node
        };
    }
    
    return node;
};

var listToArray = function(myList) {
    var myArray = [];

    for (var node = myList; node; node = node.rest) {
        if (node !== undefined) {
            myArray.push(node.value);
        }
    }

    return myArray;
};

var prepend = function(element, myList) {
    var node = {
        value: element,
        rest: myList
    };

    return node;
};

var nth = function(myList, element) {
    var myArray = listToArray(myList);
    return myArray[element];
};

// Problem 4: Deep comparison
var deepEqual = function(object1, object2) {
    var propsOne = Object.getOwnPropertyNames(object1);
    var propsTwo = Object.getOwnPropertyNames(object2);

    if (propsOne.length !== propsTwo.length) {
        return false;
    }

    if (object1 === object2) {
        return true;
    }

    for (var i in propsOne) {
        var prop = propsOne[i];

        if (typeof object1[prop] === 'object' && typeof object2[prop] === 'object' && deepEqual(object1[prop],object2[prop])) {
            continue;
        }
        else if (object1[prop] === object2[prop]) {
            return true;
        }
        else {
            return false;
        }
    }

    return true;
};


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
