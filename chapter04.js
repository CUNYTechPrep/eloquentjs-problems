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
  if (step === undefined){
    step = 1;
    for(var i = start ; i <= end; i+= step){
    array.push(i);
    }
    return array;
  }
  else if (step < 0){
    for (var i = start; i >= end; i += step) {
      array.push(i);
    }
    return array;
  }
  else{
    for(var i = start ; i <= end; i+= step){
    array.push(i);
    }
    return array;
  }
}


function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}


// console.log(range(1, 10, 2));
// console.log(range(5, 2, -1));
// console.log(sum(range(1, 10)));

// Problem 2: Reversing an Array
function reverseArray(array) {
  var newArray = [];
  for(var i = array.length - 1; i >= 0; i--){
    newArray.push(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
    for(var i = 0; i < array.length/2; i++){
    var temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
}

// console.log(reverseArray(["A", "B", "C"]));
// var arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);


// Problem 3: A List
function arrayToList(array) {
  var list = null;
  for(var i = array.length - 1; i >= 0 ; i--){
    var newList = {
      value : array[i],
      rest : list
    }
    list = newList;
    
  }
  return list;
}

function listToArray(list) {
  var array = [];
  var temp = list;
  if (temp === undefined)return null;
  while(temp != undefined){
    array.push(temp.value);
    temp = temp.rest;
  }
  return array;
}

function nth(list, position) {
  if(position === 0) return list.value;
  else if (list.rest === null) {
    return;
  }
  else{
    position--;
    return nth(list.rest, position);
  }
}

function prepend(element, list) {
  var newList = {
    value: element,
    rest:list
  };

  return newList;
}

// console.log(arrayToList([10, 20]));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// // // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // // → 20

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  if (obj1 === obj2)return true;
  for(var key in obj1){
    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object' && deepEqual(obj1[key], obj2[key])){
      continue;     
    }
    else if(obj1[key] === obj2[key]){
      return true;
    }
    else{
      return false;
    }
  }
  
  return true;
}

// var obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true

// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
