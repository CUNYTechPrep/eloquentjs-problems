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
  var numbers = [];
  if(step > 0){ //Numbers increasing
    while(start <= end){
      numbers.push(start);
      start += step;
    }

  }
  if(step < 0){ //Numbers decreasing
    while(start >= end){
      numbers.push(start);
      start += step;
    }
  }
  return numbers;
}

function sum(array) {
  var total = 0;
  for(var x=0; x<array.length;++x){
    total += array[x];
  }
  return total;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  var newArray = [];
  for(var x=0; x < array.length; ++x){
    newArray.unshift(array[x]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  var lastIndex = array.length-1;
  for(var x=0; x<lastIndex/2; ++x){
    var temp = array[x];
    array[x] = array[lastIndex-x];
    array[lastIndex-x] = temp;
  }
}

// Problem 3: A List
function arrayToList(array) {
  var ourList = null;
  for(var x=array.length-1; x>=0;--x){
    var thisList = {
      value: array[x],
      rest: ourList
    };
    ourList = thisList;
  }
  return ourList;
}

function listToArray(list) {
  var ourArray = [];
  for(var node = list; node != null; node = node.rest){
    ourArray.push(node.value);
  }
  return ourArray;
}


function nth(list, position) {
  if(list == null) return undefined;
  if(position == 0 ) return list.value;
  else{
    return nth(list.rest, position-1);
  }
}

function prepend(element, list) {
  var newList = {
    value: element,
    rest: list
  };
  return newList;
}



// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  if((typeof obj1 == "object" && obj1 != null)&& (typeof obj2 == "object" && obj2 != null)){
    var ob1count=0; //Property count of obj1
    var ob2count=0; //Property county of obj2
    for(var key in obj1){
      ++ob1count;
    }
    for(var key in obj2){
      ++ob2count;
    }

    if(ob1count != ob2count) return false;

    for(var prop in obj1){
      if(!deepEqual(obj1[prop],obj2[prop])) {
         return false;
         }
    }
    return true;
  }
  else{
    return obj1 === obj2;
  }
}



// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
