/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
  let arr = [];
  if ( step > 0){
    for (let i= start; i <= end; i += step)
      arr.push(i);
  }

  else{
    for (let i = start; i>= end; i += step)
      arr.push(i);
  }
  return arr;
}

function sum(array) {
  let sum = 0;
  for (let x = 0; x < array.length; x++){
    sum += array[x];
  }
  return sum;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  let arr =[];
  for (let i = array.length - 1; i >= 0; i--){
    arr.push(array[i]);
  }
  return arr;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i <= Math.floor(array.length/2) -1; i++){
    let temp = array[i];
    let target = array.length- i -1;
    array[i] = array[target];
    array[target] = temp;
  }
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  let List = {
    value: array[0],
    rest: null
  };

  let current = List;
  for(let i = 1; i < array.length; i++){
    current.rest = {value: array[i], rest: null};
    current = current.rest;
  }

  return List;

}

function listToArray(list) {
  let arr = [];
  for(let current = list; current; current = current.rest){
    arr.push(current.value);
  }
  return arr;
}

function nth(list, position) {
  let count = 0;
  for (current = list; current; current = current.rest){
    if (count === position)
      return current.value;
    count++;
  }
  return undefined;
}

function prepend(element, list) {
  let newlist = {value: element, rest: list};
  return newlist;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  for (let property in obj1){
    if (obj1.property != obj2.property) return false;
  }

  for (let property in obj2){
    if (obj1.property != obj2.property) return false;
  }
  return true;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
