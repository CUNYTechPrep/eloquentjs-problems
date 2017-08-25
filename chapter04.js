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
	var arr = [];
	if(step === undefined){
		for(var i = start; i <= end; i++){
			arr.push(i);
		}
    }
    else{
   		if(start > end){
        	for(var i = start; i >= end; i = i + step){
             	arr.push(i); 
            }
        }
    	else{
         	for(var i = start; i <= end; i = i + step){
             	arr.push(i); 
            }
        }
   	}
  return arr;
}

function sum(array) {
  // Your code here
	return array.reduce(function(x,y) { return (x + y); });
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
	var newArray = [];
  	for(var i = array.length-1; i >= 0; i--){
     	newArray.push(array[i]);
    }
  	return newArray;
}

function reverseArrayInPlace(array) {
  // Your code here
var temp = 0;
  	for(var i = 0; i < array.length / 2; i++) {
     	temp = array[i];
      	array[i] = array[array.length - i - 1];
      	array[array.length - i - 1] = temp;
    }
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
var list = null;
  	for(var i = array.length-1; i >= 0; i--){
    	list = { value: array[i], rest: list };
    }
  	return list;
}

function listToArray(list) {
  // Your code here
var arr = [];
  	for(var data = list; data; data = data.rest){
    	arr.push(data.value);
    }
  	return arr;
}

function nth(list, position) {
  // Your code here
if(position === 0) {
    	return list.value; 
    }
  	else{
    	return nth(list.rest, position - 1); 
    }
}

function prepend(value, list) {
  // Your code here
return {value: value, rest: list};
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
if(obj1 === obj2){
    	return true;
  	}
  	if(obj1 == null || typeof obj1 != "object" || obj2 == null || typeof obj2 != "object"){
      	return false;
    }

  	var tempObj1 = 0;
	var tempObj2 = 0;

 	for(var prop in obj1){
		tempObj1++;
    }

	for(var prop in obj2) {
      	tempObj2++;
		if(!(prop in obj1) || !deepEqual( obj1[prop], obj2[prop])){
			return false;
        }
  	}
  	return tempObj1 === tempObj2;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
