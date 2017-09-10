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
  
  if (start > end){
    for (let i = start; i >= end; i += step){
        array.push(i);
    }
  }
  else{
    for (let i = start; i <= end; i += step){
        array.push(i);
    }
  }
  return array;
}

function sum(array) {
  var total = 0;
  for (i = 0; i < array.length; i++) {
      total += array[i];
  }
  return total;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  if (array.length === 0 || array.length === 1) {
    return array;
  }
  else {
    var reversedArray = [];
    for (i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
  }
}

function reverseArrayInPlace(array) {
  if (array.length === 0 || array.length === 1) {
    return array;
  } 
  else {
    var swap;
    for (j = 0; j < array.length / 2; j++) {
        swap = array[j];
        array[j] = array[array.length - 1 - j];
        array[array.length - 1 - j] = swap;
    }
  }
  return array;
}

// Problem 3: A List
function arrayToList(array) {
  let output = {};
  ref = output;
  
  if (array.length === 0){
      ref.value = undefined;
      ref.rest = null;
  }
  
  for (i = 0; i < array.length; i++){
      ref.value = array[i];
      if (i === array.length - 1){
          ref.rest = null;
      }
      else{
          ref.rest = {};
      }
      ref = ref.rest;
  }
  return output;
}

function listToArray(list) {
  result = [];
  current = list;
  while (current !== null){
      result.push(current.value);
      current = current.rest;
  }
  return result;
}

function nth(list, position) {
  currentPosition = 0;
  currentList = list;
  
  while (currentList.rest !== null && currentPosition < position){
      // console.log(currentList.value);
      currentList = currentList.rest;
      currentPosition++;
  }
  return currentList.value;
}

function prepend(element, list) {
  return {
    value: element,
    rest: list
  }
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  if ((obj1 === null || typeof obj1 !== 'object') && (obj2 === null || typeof obj2 !== 'object')){
    return (obj1 === obj2);
  }
  else {
    if (obj1 !== obj2){
        return true;
    }
    for (let property in obj1){
        if (property in obj2){
            return deepEqual(obj1[property], obj2[property]);
        }
        else {
            return false;
      }
    }
  }
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
