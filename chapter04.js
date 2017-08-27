/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, steps) {
  if(arguments.length === 2 && start <= end)
        steps = 1;
    else if(arguments.length === 2)
        steps = -1;
    
    var arr = [];
    var arrIndex = 0;
    
    if(steps > 0) {
    for(var i = start; i <= end; i += steps){
        arr[arrIndex] = i;    
        arrIndex++;
    }
  }
    else {
    for(var i = start; i >= end; i += steps){
        arr[arrIndex] = i;    
        arrIndex++;
    }
   }
    
    return arr;
}

function sum(array) {
  var sum = 0;
    for(var i = 0; i < array.length; i++)
        sum += array[i];
    return sum;
}

// Problem 2: Reversing an Array
function reverseArray(arr) {
    var revArr = [];
    var revIndex = 0;
    
    for(var i = arr.length - 1; i >= 0; i--) {
        revArr[revIndex] = arr[i];
        revIndex++;
    }
    return revArr;
}

function reverseArrayInPlace(arr) {
    var revArr = [];
    var revIndex = 0;
    
    for(var i = arr.length - 1; i >= 0; i--) {
        revArr[revIndex] = arr[i];
        revIndex++;
    }
    
    for(var i = 0; i < arr.length; i ++)
        arr[i] = revArr[i];
}

// Problem 3: A List
function arrayToList(array) {
var list = null;
    for(var i = array.length - 1; i >= 0; i--){
        list = {value: array[i], rest: list};
    }
    return list;
}

function listToArray(list) {
    var arr = [];
    for (var node = list; node; node = node.rest) {
        arr.push(node.value);
    }
    return arr;
}

function nth(list, number) {
    if(list.rest === null) {
        return undefined; 
    }
    else if(number == 0)  {
        return list.value;
    }
    else {
        return nth(list.rest, --number); 
    }
}

function prepend(element, list) {
    list = {value: element, rest: list};
    return list;
}

// Problem 4: Deep comparison
function deepEqual(firstValue, secondValue) {
    var firstPropCount = 0, secondPropCount = 0;
    
    if((typeof firstValue != "object" && firstValue == null) || (typeof secondValue != "object" && secondValue == null)) {
        return false;
    }
    
    for (var x in firstValue) {
        firstPropCount++;
        if(!(secondValue.hasOwnProperty(x)))
           return false;
    }
    
    for(var x in secondValue)
        secondPropCount++;
    
    if((firstPropCount !== secondPropCount) || !(deepEqual(firstValue[x], secondValue[x])))
        return false;
   
  
return true;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
