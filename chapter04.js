/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
	var range = [];
	
	if(start < end){

		for (var i = start; i <= end; i += step){
			range.push(i);
		}
	}
	else
	{
		for (var i = start; i >= end; i += step){
			range.push(i);
		}
	}
	
	return range;
}

function sum(array) {
	var sum = 0;
	
	for (var i = 0; i < array.length; i++){
		sum += array[i];
	}
	
	return sum;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
	var reverseArray = [];
	
	for (var i = array.length - 1; i >= 0; i--){
		reverseArray.push(array[i]);
	}
	
	return reverseArray;
}

function reverseArrayInPlace(array) {
	for (var i = 0; i <= (array.length - 1) / 2; i++){
		var holder = array[(array.length - 1) - i];
		array[(array.length - 1) - i] = array[i];
		array[i] = holder;
	}
}

// Problem 3: A List
function arrayToList(array) {
	var list = null;
	
	for (var i = array.length - 1; i >= 0; i--){
		list = prepend(array[i], list);
	}
	
	return list;
}

function listToArray(list) {
	var array = [];
	
	if(list){
		var holder = list;
		array.push(holder.value);
		
		while(holder.rest){
			holder = holder.rest;
			array.push(holder.value);
		}
	}
	
	return array;
}

function nth(list, position) {
	if(list){
		if(position === 0){
			return list.value;
		}
		
		return nth(list.rest, position - 1);
	}
	else
	{
		return undefined;
	}
}

function prepend(element, list) {
	var newList = {
		value: element,
		rest: list
	}
	return newList;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
	if(obj1 != null && obj2 != null)
	{
		if(typeof obj1 != "object" && typeof obj2 != "object")
		{
			return obj1 === obj2;
		}
		
		if(typeof obj1 != "object" || typeof obj2 != "object")
		{
			return false;
		}
		
		var count1 = 0, count2 = 0;
		
		for (var property in obj1)
		{
			count1++;
		}
		
		for (var property in obj2)
		{
			count2++;
		}
		
		if(count1 != count2)
		{
			return false;
		}
		
		for (var property in obj1)
		{
			if (!property in obj2)
			{
				return false;
			}
		}
		
		for (var property in obj1)
		{
			if (!deepEqual(obj1[property], obj2[property]))
			{
				return false;
			}
		}
		
		return true;
	}
	else
	{
		return obj1 === null && obj2 === null;
	}
}


// Do not modify below here.
module.exports = {
	range, sum, reverseArray, reverseArrayInPlace,
	arrayToList, listToArray, nth, prepend, deepEqual
};
