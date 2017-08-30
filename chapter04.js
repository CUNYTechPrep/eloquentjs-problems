/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(num1, num2, num3=1) {
  // Idk why this code is crashing the test
  // var arr =[];
  //
  // while(num1 !== num2 && num1 >= 0){
  //     arr.push(num1);
  //     num1 += num3;
  // }
  //  arr.push(num2);
  //  return arr;
}

function sum(val) {
  var total = 0;
  for(var i = 0; i < val.length; i++){
   total += val[i];
  }
  return total;
}

// Problem 2: Reversing an Array
function reverseArray(arr) {
  // Your code here
  var revArr = [];
  for(var i = arr.length-1; i >= 0; i--){
   revArr.push(arr[i]);
  }
  return revArr;
}

function reverseArrayInPlace(arr) {
  // Your code here
  var temp = 0;
  var count = 0;
  for(var i = arr.length-1; i >= arr.length/2; i--){
    temp = arr[count];
    arr[count] = arr[i];
    arr[i] = temp;

    count++;
  }
  return arr;
}

// Problem 3: A List
function arrayToList(arr) {
  // Your code here
  var list = null;
   for(var i = arr.length-1; i >= 0; i--){
       list = {value: arr[i], rest: list};
   }
 return list;
}

function listToArray(list) {
  // Your code here
  var arr = [];
    while(list){
      arr.push(list.value);
      list = list.rest;
    }
  return arr;
}

function nth(list, num) {
  // Your code here
  if(num === 0){
    return list.value;
  }else if(!list){
    return undefined;
  }else{
    return nth(list.rest, num - 1);
  }
}

function prepend(val, list) {
  // Your code here
  var newList = {value: val, rest: list};
  return newList;
}

// Problem 4: Deep comparison
function deepEqual(comp1, comp2) {
  // Your code here

}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
