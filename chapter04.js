/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
  var array = [];
  if(arguments.length == 2){
  	for(var i = arguments[0]; i<=arguments[1]; i++){
    	array.push(i);
  	}
  }
  else if(arguments.length == 3){
 	if(arguments[0] < arguments[1]){
      for(var i = arguments[0]; i<=arguments[1]; i+=arguments[2]){
    	array.push(i);
  	  }
    }
    else if (arguments[0] > arguments[1]){
     for(var i = arguments[0]; i>=arguments[1]; i+=arguments[2]){
    	array.push(i);
  	 } 
    }
  }
  return array;
}

function sum(array) {
  // Your code here
    var sum =0;
  for(var i = 0; i<array.length;i++){
  	sum+=array[i];   
  }
  return sum;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
  var array = [];
  for(var i= arr.length-1; i>=0; i--){
    array.push(arr[i]);
 }
 return array;
}

function reverseArrayInPlace(array) {
  // Your code here
  var temp = 0;
  for(var i = 0; i < (array.length)/2 ; i++){
    temp = array[i];
    array[i] = array[array.length -1 -i];
 	array[array.length -1 -i] = temp;
    }
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  var list;
  for(var i = array.length-1; i>=0; i--){
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  // Your code here
  var array = [];
  for (var node = list; node; node = node.rest) {
  	array.push(node.value);
  }
  return array;
}

function nth(list, position) {
  // Your code here
  var array = [];
  for (var node = list; node; node = node.rest) {
  	array.push(node.value);
  }
  return array[num];
}

function prepend(element, list) {
  // Your code here
  var list;
  list = {value:a , rest:b};
  return list;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
  if ((typeof a == "object" && a != null) && (typeof b == "object" && b != null)) {
    for (var val in a) {
      if (b.hasOwnProperty(val))
      {  
        if (! deepEqual(a[val], b[val]))
          return false;
      }
      else
        return false;
    }
    return true;
  }
  else if (a !== b)
    return false;
  else
    return true;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
