/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
  let result = [];
  if(start > end){
    for(let i= start; i >= end; i += step){
      result.push(i)
    }
  }
  else {
    for(let i= start; i <= end; i+=step){
      result.push(i)
    }
  }
  return result;
}

function sum(array) {
  let sum = 0;
  for(let i= 0; i<array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  let newArray = [];
  for(let i = array.length-1; i >= 0 ; i--) {
    newArray.push(array[i])
  }
  return newArray
}

function reverseArrayInPlace(array) {
  let first,
      last,
      midElement = Math.floor(array.length /2);

  for(let i=0; i<=midElement; i++) {
    first = array[i]; 
    last = array[array.length-1-i];
    array[i] =last;
    array[array.length-1-i] =first;
  }
  return array;
}

// Problem 3: A List
function arrayToList(array) {
  let list = null;
  for(let i = array.length-1; i >= 0; i--) {
    list = {value: array[i], rest: list}
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function nth(list, position) {
  if(!list) return null;
  else if(position == 0) return list.value;
  else return nth(list.rest, position-1);
}

function prepend(element, list) {
  return { value: element, rest: list };
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  if ((typeof obj1 == 'object' && obj1 != null) && (typeof obj2 == 'object' && obj2 != null)) {
    if(Object.keys(obj1).length != Object.keys(obj2).length) {
      return false;
    }
    for(let prop in obj1) {

      if(obj2.hasOwnProperty(prop)) {
        if (!deepEqual(obj1[prop], obj2[prop])) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  }
  else if (obj1 != obj2) return false;

  else return true;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
