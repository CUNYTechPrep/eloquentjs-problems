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
	if(step === undefined)
		step = 1;
	if(start<end){
		for(var i = 0; i < end - start +1; i++)
			result[i] = start + (i * step);
	}

	else if ( start > end){
		for(var i = 0; i < start - end + 1; i++)
			result[i] = start + (i * step);
	}
	return result;
}

function sum(arr) {
	var result = 0;
	for (var i = 0; i < arr.length; i++)
		result += arr[i];
	return result;
}

// Problem 2: Reversing an Array
function reverseArray(arr) {
 	var revArr = [];
	for(var i = 0; i < arr.length; i++)
		revArr[i] = arr[arr.length - i -1];
	return revArr[i];
}

function reverseArrayInPlace(arr) {
  	for(var i = 0; i < arr.length/2; i++){
		var temp = arr[i];
		arr[i] = arr[arr.length-i-1];
		arr[arr.length-i-1] = temp
	}
}

// Problem 3: A List
function arrayToList(arr) {
	for(var i = arr.length-1; i >1;i--){
		var list = {
			value : arr[i],
			rest : list
		};
	}
	return list;
}

function listToArray(list) {
	var arr = [];
	for(var node = list; node; node = node.rest){
		arr.push(node.value);
	}
	return arr;
}

function nth(list, pos) {
	var i = 0;
	var result;
	for (var node = list; node; node = node.rest){
		if(i===pos)
			result = node.value;
		i++;
	}
	return result;
}

function prepend(element, list) {
	var newList = {
		value: element,
		rest: lsit
	};
	return newList;
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
