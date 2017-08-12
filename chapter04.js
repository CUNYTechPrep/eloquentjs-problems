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
	if(step == undefined){
      step = 1;
    }
    var arr = [];
  	if(start <= end){
    	for(var i=start; i<=end; i=i+step){
        	arr.push(i);
    	}
    }
  	else{
      for(var i=start; i>=end; i=i+step){
        	arr.push(i);
    	}
    }
    return arr;
}

function sum(array) {
  // Your code here
    var sum = 0;
    for(var i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
  var newArray = [];
  for(var i = array.length - 1; i >= 0; i--){
    newArray.push(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  // Your code here
  for(var i=0; i<array.length/2; i++){
    var temp = array[i];
    array[i] = array[array.length-i-1];
    array[array.length-i-1] = temp;
  }
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  var list = null;
  for(var i=array.length-1; i>=0; i--){
    list = {value: array[i],rest: list};
  }
  return list;
}

function listToArray(list) {
  // Your code here
  var array = [];
  for(var node=list; node; node=node.rest){
    array.push(node.value);
  }
  return array;
}

function nth(list, position) {
  // Your code here
  if( position == 0){
    return list.value;
  }else{
    return nth( list.rest, position-1);
  }
}

function prepend(element, list) {
  // Your code here
  return {value: element, rest: list};
}

// Problem 4: Deep comparison
function deepEqual(object1, object2) {
  // Your code here
  if(object1 === object2) return true;
  else if( object1 == null || typeof object1 != "object" || object2 == null || typeof object2 != "object" ) return false;
  var property1 = 0;
  var property2 = 0;
  for(var i in object1){
    property1++;
  }
  for(var i in object2){
    property2++;
    if( !(i in object1) || !deepEqual(object1[i],object2[i])) return false;
  }
  return property1 === property2;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
