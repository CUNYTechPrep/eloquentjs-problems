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
  var range_arr = [];
  for(var i = start; i <= end; i++){
    range_arr.push(i);
  }
  return range_arr;
}

function sum(array) {
  // Your code here
  var sum = 0;
  for(var i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
  var amt_of_swaps = Math.floor(array.length/2);
  for(var i = 0; i < amt_of_swaps; i++){
    var temp = array[i];
    array[i] = array[array.length - (i + 1)];
    array[array.length - (i + 1)] = temp;
  }
  return array;
}

function reverseArrayInPlace(array) {
  // Your code here
  var amt_of_swaps = Math.floor(array.length/2);
  for(var i = 0; i < amt_of_swaps; i++){
    var temp = array[i];
    array[i] = array[array.length - (i + 1)];
    array[array.length - (i + 1)] = temp;
  }
  return array;
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  var list = {
    value: null,
    rest: null
  };
  var i = 0;
  for(var node = list;  i < array.length; node = node.rest){
    node.value = array[i];
    if(i != array.length-1){
      node.rest = new Object();
    } else {
      node.rest = null;
    }
    i++;
  }
  return list;
}

function listToArray(list) {
  // Your code here
  var array = [];
  for(var node = list; node; node = node.rest){
    array.push(node.value);
  }
  return array;
}

function nth(list, pos) {
  // Your code here
  var counter = 0;
  for(var node = list; counter <= pos; node = node.rest){
    if(counter == pos){
      return node.value;
    }
    counter++;
  }
  return undefined;
}

function prepend(element, list) {
  // Your code here
  var newList = {};
  newList.value = element;
  newList.rest = list;
  return newList;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
  if((typeof(obj1) == "object" && obj1 != null) && (typeof(obj2) == "object" && obj2 != null)){
    if(typeof(obj1.here) == "object" && typeof(obj2.here) == "object"){
      if(obj1.is === obj2.is && obj1.object === obj2.object){
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return obj1 === obj2;
  }
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};