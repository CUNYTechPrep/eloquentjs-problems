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
  let array = [];

  if(start > end){
  for(let i = start; i >= end; i+=step)
    array.push(i);
  }
  else{
    for(let i = start; i <= end; i+=step)
    array.push(i);
  }

  return array;
}

function sum(array) {
  // Your code here
  let sum = 0;
  for(let i = 0; i < array.length; i++)
    sum += array[i];

  return sum;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
  let newArray = [];
  let index = 0;
  for(let i = array.length-1; i >= 0; i--){
    newArray[index] = array[i];
    index++;
  }

  return newArray;
}

function reverseArrayInPlace(array) {
  // Your code here
  for(let i = 0; i < array.length/2; i++){
    let temp = array[i];
    array[i] = array[array.length-1-i];
    array[array.length-1-i] = temp;
  }

  return array;
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  let list = new Object();
  let iterator = list;

  for(let i = 0; i < array.length; i++){
    iterator.value = array[i];

    if(i != array.length-1){
      iterator.rest = new Object();
      iterator = iterator.rest;
    }
    else
      iterator.rest = null;
  }

  return list;
}

function listToArray(list) {
  // Your code here
  let array = [];
  let iterator = list;
  let i = 0;
  while(iterator != null){
    array[i] = iterator.value;
    iterator = iterator.rest;
    i++;
  }
  return array;
}

function nth(list, position) {
  // Your code here
  let iterator = list;
  let i = 0;
  while(iterator != null && i < position){
    i++;
    iterator = iterator.rest;
  }

  if(iterator != null && i == position)
    return iterator.value;
  else
    return undefined;
}

function prepend(element, list) {
  // Your code here
  let newObject = new Object();
  newObject.value = element;
  newObject.rest = list;
  return newObject;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
  if(obj1 === obj2)
    return true;

  if(typeof obj1 !== typeof obj2)
    return false;

  let propertiesObj1 = Object.keys(obj1);
  let propertiesObj2 = Object.keys(obj2);

  if(propertiesObj1.length !== propertiesObj2.length)
    return false;

  propertiesObj1.forEach(property => {
    if(!obj2.hasOwnProperty(property))
      return false;
  });

  for(property in obj1)
    return deepEqual(obj1[property], obj2[property]);
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
