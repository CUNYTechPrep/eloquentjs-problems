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
  var array = [];
  var x = 0;
  
  if(step<0){
    for (var i = start; i >= end; i += step){
     array[x] = i;
     x++;
  }
  }


  for (var i = start; i <= end; i += step){
     array[x] = i;
     x++;
  }
  
  return array;
     
}



function sum(array) {
  var sumT = 0;
  for (var i = 0; i < array.length; i++)
    sumT += array[i];
  return sumT;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
  var arr1 = [];
  var x = array.length-1;

    for(var i = 0; i<array.length; i++){
      arr1[i] = array[x--];
    }
  return arr1;
 }

function reverseArrayInPlace(array) {
  // Your code here
 var x = array.length-1;
  
  for(var i = 0; i<= x; i++){
    var y = array[i] 
    array[i] = array[x];
    array[x] = y;
    x=x-1-i;
  }
  return array;
    

}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  var list = null;
    for(var i = array.length-1; i>=0; i--){
      list = {
      value: array[i],
      rest: list
    };

  }
  return list;
  }

function listToArray(list) {
  // Your code here
  var array = [];
  var i = 0;

  for (var node = list; node; node = node.rest){
    array[i++] = (node.value);

  }
  return array;
}

function nth(list, position) {
  // Your code here

  if (position == 0){
    return list.value;
  }else{
     return nth(list.rest, position-1);

  }

}

function prepend(element, list) {
  // Your code here
  var list = {
    value: element,
    rest: list

  }
  return list;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
  if (obj1===obj2) return true;
 if (obj1==null || typeof obj1 != "object" || obj2==null || typeof obj2 != "object"){
   return false;
 }

 for (var key in obj2) {
   if (!(key in obj1) || !deepEqual(obj1[key], obj2[key]))
     return false;
 }

 return true;
}

// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
