/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
  var size;
  if(start <= end){
    size = (end-start)/step;
  }else{
    size = (start-end)/step;
  }
  if(size < 0){
    size *= -1;
  }
  var a = [];
  var num = start;
  for(var i = 0; i <= size; i++){
    a[i] = num;
    if(isNaN(step)){
      num++
    }else{
      num += step;
    }
  }
  return a;
}

function sum(array) {
  var sum = 0;
  for(var i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  var a_rev = [];
  var end = array.length-1;
  for(var i = 0; i < array.length; i++){
    a_rev[i] = array[end];
    end--;
  }
  return a_rev;
}

function reverseArrayInPlace(array) {
  var end = array.length-1;
  for(var i = 0; i < array.length/2; i++){
    var tmp = array[i];
    array[i] = array[end];
    array[end] = tmp;
    end--;
  }
  return array;
}

// Problem 3: A List
function arrayToList(array) {
  var list = null;
  for(var i = array.length-1; i >= 0; i--){
    list = {
      value: array[i],
      rest: list
    }
  }
  return list;
}

function listToArray(list) {
  var a = [];
  for(var i = 0; isNaN(list); i++){
    a[i] = list.value;
    list = list.rest;
  }
  return a;
}

function nth(list, position) {
  if(position == 0){
    return list.value;
  }
  return nth(list.rest, position-1);
}

function prepend(element, list) {
  list = {
    value: element,
    rest: list
  }
  return list;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  if(typeof(obj1) != "object" || typeof(obj2) != "object"){
    return obj1 === obj2;
  }else{
    for(var prop1 in obj1){
      for(var prop2 in obj2){
        return deepEqual(obj1[prop1], obj2[prop2]);
      }
    }
  }
  return obj1 === obj2;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
