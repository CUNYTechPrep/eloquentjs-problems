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
  var list = [];
  var counter = 0;
  if(typeof step === "undefined"){
    step = 1;
  }
  for(var i = start; i!=end+step; i= i+step){
    list[counter] = i;
    counter++;
  }
  return list;
}

function sum(array) {
  // Your code here
  var result = 0;
  for(var i = 0; i<list.length; i++)
  {
    result = result + list[i];
  }
  
  return result;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
  var counter = 0;
  var newarray = [];
  for(var i = array.length-1; i>=0; i--){
    newarray[counter] = array[i];
    counter++;
  }
  return newarray;
}

function reverseArrayInPlace(array) {
  // Your code here
  var end = array.length-1;
  function swap(array, x, y){
    var temp = array[x];
    array[x] = array[y];
    array[y] = temp;
  }
  var ing = array.length/2;
  for(var i = 0; i < ing.toFixed(0); i++){
    swap(array, i, end-i);
  }
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  var remain = [];
  var temp = {};
  if(array[0] === undefined){
    return null;
  }else{
    for(var i = 1; i<array.length; i++){
      remain[i-1] = array[i];
    }
    temp = arrayToList(remain);
  }
  var list = {
    value: array[0],
    rest: temp
  }
  return list;
}

function listToArray(list) {
  // Your code here
  var array = [];
  var counter = 0;
  for(var node = list; node; node = node.rest){
    array[counter] = node.value;
    counter++;
  }
  return array;
}

function nth(list, position) {
  // Your code here
  var array = [];
  var counter = 0;
  var result;
  for(var node = list; node; node = node.rest){
    if(counter === position){
      result = node.value;
    }
    counter++;
  }
  return result;
}

function prepend(element, rest) {
  // Your code here
  var list = {
    value: element,
    rest: null
  }
  if(rest === undefined){
  return list;
  }else{
    list.rest = rest;
  }
  return list;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
  if( typeof obj1 == 'object' && typeof obj2 == 'object')
  {
    var o1=0, o2=0;
    for(var element in obj1)
      o1++;
    for(var element in obj2) 
      o2++;
    if(o1-o2 !== 0) return false;
    for(var element in obj1)
    {
      if(!(element in obj2) || !deepEqual(obj1[element],obj2[element]))
        return false;
    }
    for(var element in obj2)
    {
      if(!(element in obj1) || !deepEqual(obj1[element],obj2[element])) 
        return false;
    }
    return true;
  }
  else
  return obj1 === obj2;
  
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
