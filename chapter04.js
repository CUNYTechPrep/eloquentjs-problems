/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(begin, end, step=1) {
  var my_array = [];
  if (typeof step === 'undefined'){
    step = 1;
  }
  switch (begin < end){
    case true:
      if(step <= 0){
        console.log("ERROR: Infinite loop. Enter valid step.")
        break;
      } else {
        for(var i = begin; i <= end; i = i + step){
          my_array.push(i);
        }
        break;
      }
    case false:
    if(step >= 0){
      console.log("ERROR: Infinite loop. Enter valid step.")
      break;
    } else {
      for(var i = begin; i >= end; i = i + step){
        my_array.push(i);
      }
      break;
    }
  }
  return my_array;
}

function sum(sum_array) {
  // Your code here
  var sum = 0;
  for(var i = 0; i < sum_array.length; i++){
    sum = sum + sum_array[i];
  }
  return sum;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
  var new_array = [];
  for(var i = array.length-1; i >= 0; i--){
    new_array.push(array[i]);
  }
  return new_array;
}

function reverseArrayInPlace(array) {
  // Your code here
  var begin = 0;
  var end = array.length-1;
  var temp;
  while(begin < end){
    temp = array[begin];
    array[begin] = array[end];
    array[end] = temp;
    begin++;
    end--;
  }
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
}

function listToArray(list) {
  // Your code here
}

function nth(list, position) {
  // Your code here
}

function prepend(element, list) {
  // Your code here
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
  if (obj1 === obj2){
  return true;
  }

  if(typeof obj1 === "object" && typeof obj2 === "object" && obj1 != null && obj2 != null){
    if(Object.keys(obj).length != Object.keys(obj).length){
      return false;
    }
    for(x in obj1){
      if(!obj2.hasOwnProperty(x)){
        console.log(obj2[x]);
        return false;
      }
      if(obj1[x] != obj2[x]){
        return false;
      }
    }
    return true;
  }
  return false;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
