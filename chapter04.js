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
  let arr = [];

  if(start > end && step === 1){
  	step = -1;

  }

  if(step > 0){
  	for(let i = start; i<= end; i+=step){
  		arr.push(i);
  	}
  }
  else{
  	for(let i = start; i>=end; i+=step){
  		arr.push(i);
  	}
  }

  return arr;
}

function sum(array) {
  // Your code here
  let sum = 0;
  for(let i = 0; i<array.length; i++){
  	sum += array[i];
  }
  return sum;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
  let newArray = [];

  for(let i = array.length-1; i >= 0; i--){
  	newArray.push(array[i]);
  }

  return newArray;
}

function reverseArrayInPlace(array) {
  // Your code here
  let temp;
  for(let i = 0; i< Math.floor((array.length-1)/2); i++){
  	temp = array[i];
  	array[i] = array[array.length- 1 - i];
  	array[array.length - 1 - i] = temp;
  }
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  let temp;
  let listA = null;
  for (var i = array.length - 1; i >= 0; i--) {
   temp = array[i];
   listA = {value: temp, rest: listA};	
  }
  return listA
}

function listToArray(list) {
  // Your code here
  let arr = [];
  let i = 0;

  for(var node = list; node; node = node.rest){
  	arr[i++] = node.value;
  }

  return arr;
}

function nth(list, position) {
  // Your code here
  let count = position-1;
  if(position === 0){
  	return list.value;
  }

  if(list.rest === null){
  	return undefined;
  }

  return nth(list.rest, count);
}

function prepend(element, list) {
  // Your code here
  if(list === null){
  	list = {value: element, rest: null};
  }
  else{
  	list = {value: element, rest: list};
  }

  return list;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
  if((typeof obj1 === "object" && obj1 != null) && (typeof obj2 === "object" && obj2 != null)){
  	let count1 = 0;
  	let count2 = 0;
  	for(var prop in obj1){
  		count1++;
  	}
  	for(var prop in obj2){
  		count2++;
  	}

  	if(count1 != count2){
  		return false;
  	}

  	for(var prop in obj1){
  		if(!(prop in obj2) || !deepEqual(obj1[prop],obj2[prop])){
  			return false;
  		}
	}

	for(var prop in obj2){
  		if(!(prop in obj1) || !deepEqual(obj2[prop],obj1[prop])){
  			return false;
  		}
	}
	return true
  }
  else{
  	return obj1 === obj2;
  }
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
