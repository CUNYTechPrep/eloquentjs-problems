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
  if(step < 0){
    for(var i = start; i >= end; i+= step){
    array.push(i);
    }
  } else {
    for(var i = start; i <= end; i += step){
      array.push(i);
    }
}
return array;
}

function sum(array) {
  var total = 0;
  for(var i = 0; i < array.length; i++){
    total += array[i];
  }
  return total;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  var result = [];
  for(var i = array.length -1; i >= 0; i--){
    result.push(array[i]);
  }
  return result;
}

function reverseArrayInPlace(array) {
  for(var i = array.length -1; i >= array.length/2; i--){
    var temp = array[array.length-1-i];
    array[array.length-1-i] = array[i];
    array[i] = temp;
  }
  return array;
}

// Problem 3: A List
function arrayToList(array) {
  var list = {
    value: 0,
    rest: null
  };

  if(array.length == 1){
    list.value = array[0];
    return list
  } else {
    list.value = array[0];
    list.rest = arrayToList(array.slice(1));
    return list;
  }
}

function listToArray(list) {
  var array = [];

  if(list.rest == null){
    array.push(list.value);
    return array;
  } else {
    array = listToArray(list.rest);
    array.unshift(list.value);
    return array;
  }
}

function nth(list, position) {
  if (list == null) {
    return undefined;
  }else if (position == 0) {
    return list.value;
  }else{
    return nth(list.rest, position - 1);
  }
 }

function prepend(element, list) {
  var list = {
    value: element,
    rest: list
  };
  return list;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  if(obj1 === obj2){
    return true;
  }
  if(typeof obj1 === typeof obj2 && typeof obj1 === "object"){
    if(obj1 === null || obj2 == null){
      return false;
    }
    for(var val in obj1){
      if(!obj2[val]){
        return false;
      } else {
        return deepEqual(obj1[val],obj2[val]);
      }
    }
  }else{
    return false;
  }
}
// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
