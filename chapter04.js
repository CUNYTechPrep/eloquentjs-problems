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
  var start_cpy = start;

  for(var i=0; i<=(end-start); i=i+step){
    array[i] = start_cpy;
    start_cpy = start_cpy+1;
  }
  return array;
}

function sum(array) {
  var sum = 0;
  var old_sum = 0;
  for(var i=0; i<range_array.length; i++){ //is there another way to cycle through elements of an array in javascript?
    sum = range_array[i] + old_sum;
    old_sum = range_array[i];
  }
  return sum;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  var temp_array = [];
  for(var i=0; i<array.length; i++){
    temp_array[(array.length)-1-i] = array[i];
  }
  return temp_array;
}

function reverseArrayInPlace(array) {
  var temp;
  for(var i=0; i<array.length; i++){
    temp = array[i];
    array[i] = array[(array.length)-1-i];
  }
  return array;
}

// Problem 3: A List

/*
List (as in linked list in C++)

Objects, as generic blobs of values, can be used to build all sorts of data
structures. A common data structure is the list (not to be confused with
the array). A list is a nested set of objects, with the first object holding
a reference to the second, the second to the third, and so on.

var list = {
    value : 1 ,
    rest : {
        value : 2,
        rest : {
            value : 3,
            rest : null
        }
    }
};
*/

function arrayToList(array) {
  if(array.length === 0){
    return null;
  }

  return{
    value: array.shift();
    rest: arrayToList(array);
  }
}

function listToArray(list) {
  var array;
  var i = 0;
  while(list.value != null){
    array[i] = list.value;
    i++;
    list = list.rest;
  }
  return array;
}

function nth(list, position) {
  if(list.value === number){
    return true;
  }
  else if(list.value === null){
    return false;
  }
  else{
    return nth(number,list.rest);
  }
}

function prepend(element, list) {
  return{
    value: element;
    rest: list;
  }
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
