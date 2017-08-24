/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
  var numbers = [];
  if (step == null) {
  	step = 1;
  }
  
  if (step > 0) {
  	for (var i = start; i <= end; i+=step) {
    	numbers.push(i);
        }
    } else { 
      for (var j = start; j >= end; j+=step) {
    	numbers.push(j);
 	       }   
	    } 
   return numbers; 
}

function sum(array) {
  	var s = 0;
  	for (var i = 0; i < array.length; i++) {
    	s += array[i];
    }
	return s;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  var RA = [];
	for (var i= array.length-1; i >= 0; i--) {
      RA.push(array[i]);
    }
  return RA;
}

function reverseArrayInPlace(array) {
  var x = Math.floor(array.length/2);
  	for (var i = 0; i <= x ; i++) {
    	var y = array[array.length-1-i];
      	array[array.length-1-i] = array[i];
      	array[i] = y; 
    }
  return array;
}

// Problem 3: A List
function arrayToList(array) {
  var list = {value : array[array.length-1], rest: null }
	for (var i = array.length-2; i >=0; i--) {
      list = {value : array[i], rest: list };
    } 
	return list;
}

function listToArray(list) {
  var A = [];
	for (var node = list; node; node = node.rest){
        	A.push(node.value);
    } 
  return A;
}

function nth(list, position) {
  var i = 0;
	for (var node = list; node; node = node.rest) {
    	if (i == position) {
        	return node.value;
        } 
        i++;
    }
  return undefined;
}

function prepend(element, list) {
  var list = {value : element, rest: list }
    return list;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) { 
    return true;
  };
  
  var c1 = 0;
  var c2 = 0;
  if (typeof obj1 == "object" && obj1 != null &&
      typeof obj2 == "object" && obj2 != null) {
  	for (var key in obj1) {
       c1++;
    };
    for (var key in obj2) {
       c2++;
    	if (!(key in obj1) || !deepEqual(obj1[key], obj2[key])) {
        return false;	
   	 };
    }; 
    if (c1 == c2) {
    return true;
    	};
	};
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
