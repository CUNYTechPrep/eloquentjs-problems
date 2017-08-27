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
  var thisArray=[];
  if (start === end){
    thisArray[0] = start;
  }
  else if (step === 0){
    return thisArray;
  }
  else if (typeof step === "number"){
    if(start > end){
      for (var i = start; i>=end; i+=step){
        thisArray.push(i);
      }
    }
    else {
    for (var i=start; i<= end; i+=step){
      thisArray.push(i);
    }
  }
}
  
  return thisArray;
}

function sum(array) {
  // Your code here
  var sums = 0;
  for(var i=0; i < array.length; i++){
    sums+= array[i];
  }
  return sums;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
  var newArray = [];
    for (var i=array.length-1; i>= 0; i--){
      newArray.push(array[i]);
    }
  return newArray;
}

function reverseArrayInPlace(array) {
  // Your code here
  var middle = Math.floor(array.length/2);
    var size = array.length-1;
    var temp = 0;
    for(var i = 0; i < middle; i++){
          temp = array[i];
      array[i] = array[size];
          array[size] = temp;
          size--;
    }
  return array;
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  var theList = null;
  for(var i = array.length-1; i>=0; i--){
    var list={
      value: array[i],
        rest: theList
    }
    theList = list;
  }
  return theList;
}

function listToArray(list) {
  // Your code here
  var array = [];
  while(list != null){
      array.push(list.value);
        list = list.rest;
    }
    return array;
}

function nth(list, position) {
  // Your code here
  if (position === 0) {
      return list.value; 
    }
    else if(list.rest === null){
       return;
    }
    else{
        return nth(list.rest, position-1);
    }
}

function prepend(element, list) {
  // Your code here
  var thelist = {
      value: element,
        rest:list
    };
    return thelist;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
  if(typeof obj1 !== typeof obj2 || obj1.length !== obj2.length || obj1 === null || obj2 === null){
      return false; 
    }
    if(obj1 === obj2){
      return true; 
    }

    for(var property in obj1){
      return deepEqual(obj1[property], obj2[property]);
    }
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
