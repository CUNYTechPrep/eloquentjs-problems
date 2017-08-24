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
  var arr = [];
  if(start < end && step > 0){
     for(var i = start; i <=end; i+=step){
      arr.push(i);
    }
  }
    else if(start >= end && step < 0){
      for(var i = start; i >=end; i+=step){
          arr.push(i);
      }
    }
    else
      console.log("provide valid step argument");
  return arr;
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
  var reversedArr = [];
  for(var i = array.length - 1; i>=0; i--){
    reversedArr.push(array[i]);
  }
  return reversedArr;
}

function reverseArrayInPlace(array) {
  // Your code here
  var front = 0;
  var end = array.length - 1;
  var temp = 0;

  while(front <= end){
    temp = array[front];
    array[front] = array[end];
    array[end] = temp;
    front++;
    end--;
  }
  return array;
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  var list = null;
  for(var i = array.length - 1; i >=0; i--){
    list = {
        value: array[i],
        rest: list
    };
  }
  return list;
}

function listToArray(list) {
  // Your code here
  var arr = [];
    for(var i = list; i; i = i.rest){
      arr.push(i.value);
    }
    return arr;
}

function nth(list, position) {
  // Your code here
  if(list === null)
    return undefined;
  else if(position == 0)
    return list.value;
  else
    return nth(list.rest, position - 1)
}

function prepend(element, list) {
  // Your code here
  var newList = listToArray(list);  //convert list to array
  newList.unshift(element); //add element to front of array
  newList = arrayToList(newList); //convert back to list

  return newList;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
  if(obj1 === obj2)
    return true;  //if identities are equal return true
  if(obj1 == null || obj2 == null)
    return false; //if either are null return false
  //check for object type
  if(typeof obj1 === "object" || typeof obj2 === "object"){
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);
    if(keys1.length !== keys2.length)
      return false; //if length of properties are different, return false
    else{
      for(var i in obj1){
        if(!deepEqual(obj1[i], obj2[i]))
          return false;//recursive call
      }
      return true;
    }

  }
  return false;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};