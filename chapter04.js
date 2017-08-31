/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, inc=1) {
  var array = [];
  if(start <= end){
    for (var i=start; i<= end; i+= inc){
      array.push(i);
    }
  }
  else{
    for(var x = start; x>= end; x-=inc){
      array.push(x);
    }
  }
  return array;
}

function sum(arr) {
  var total = 0;
  for(var i=0; i< arr.length; i++){
    total += arr[i];
  }
  return total; 
}

// Problem 2: Reversing an Array
function reverseArray(arr) {
  var new_arr = []; 
  for(var i = arr.length -1; i>= 0; i--){
    new_arr.push(arr[i]);
  }
  return new_arr;
}

function reverseArrayInPlace(arr) {
for(var x = 0; x< Math.floor(arr.length/2);x++){
    var tmp = arr[x];
    arr[x] = arr[arr.length -1- x];
    arr[arr.length-1-x] = tmp;
  }
  return arr;
}

// Problem 3: A List
function arrayToList(arr) {
  var list = null; // not [] bc it's not an array!!
  for(var i = arr.length -1 ; i >= 0; i--){
    list = {value: arr[i], rest: list}
  }
  return list;
}

function listToArray(list) {
 arr = []; // we need this in order to create new array
  for(var node= list; node; node = node.rest){
    arr.push(node.value);
  }
  return arr;
}

function nth(list, position) {
  for(var node = list; node; node = node.rest){
    var tmp = listToArray(node);
  }
  return tmp[node]; 

}

function prepend(element, list) {
  list = {value: element, rest: list};
  return list;
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
