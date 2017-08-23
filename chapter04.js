/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
  var arr = [];
  if(start <= end){
    for(var i = start; i <= end; i += step){
      arr.push(i);
    }
  }else{
    for(var i = start; i >= end; i += step){
      arr.push(i);
    }
  }
  return arr;
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
  var newArr = [];
  for(var i = array.length-1; i >= 0; i--){
    newArr.push(array[i]);
  }
  return newArr;
}

function reverseArrayInPlace(array) {
   var temp;
  var i = 0;
  var j = array.length-1;
  while(i < j){
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    i++;
    j--;
  }
}

// Problem 3: A List
function arrayToList(array) {
  var list;
  if(array.length > 0){
    list = {value: array[array.length-1], rest: null};
    if(array.length > 1){
      for(var i = array.length-2; i >= 0; i--){
        list = {value: array[i], rest: list};
      }
    }
  }
  return list;
}

function listToArray(list) {
  var arr = [];
  for(var node = list; node; node = node.rest){
    if(node.value != null){
      arr.push(node.value);
    }
  }
  return arr;
}

function nth(list, position) {
  if(position === 0) return list.value;
  else return nth(list.rest, position-1);
}

function prepend(element, list) {
  newList = {value: element, rest: list};
  return newList;
}

// Problem 4: Deep comparison
function deepEqual(a, b) {
   if( ((typeof(a) == "object") && (a!= null))  && ((typeof(b) == "object") && (b!= null)) ){
    for(var keya in a){
      for(var keyb in b){
        if(keya == keyb) return deepEqual(a[keya], b[keyb]);
        else if(keya != keyb) return false;
      }
    }
  }
  else{
    return a == b;
  }
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
