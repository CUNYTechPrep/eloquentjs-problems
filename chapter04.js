/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
  let array = [];
  if(start >  end){
    for(let i=start; i <= end; i+=step){
      array.push(i)
    }
  } else{
    for(let i=start)
  }
}

function sum(array) {
 let sumTotal = 0;
 for(let i=0; i < array.length; i++){
   sumtotal += array[i];
 }
 return sumtotal;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
 let revArray =[];
 for(let i=array.length - 1; i >= 0; i--){
   revArray.push(array[i]);
 }
 return revArray;
}

function reverseArrayInPlace(array) {
  let tempVal;
  let fixedSize = array.length - 1;
  let midPoint = Math.floor(array.length/2);
  for(let i=0; i < midPoint; i++){
    tempVal = array[i];
    array[i] = array[fixedSize - i];
    array[fixedSize - i] = tempVal;
  }
  return array;
}

// Problem 3: A List
function arrayToList(array) {
  let fixedSize = array.length - 1;
  let arrToList = null;
  for(let i= fixedSize; i >= 0; i--){
    arrToList = {
      value: array[i],
      rest: arrToList
    };
   }
  }
  return arrToList;
}

function listToArray(list) {
 let returnArray = [];
 while(list != null){
   returnArray.push(list.vaue);
   list = list.rest;
 }
 return returnArray;
}

function nth(list, position) {
  if(!Number.isInteger(position)){
    return undefined;
  } elseif(position === 0){
    return list.value;
  }else{
    return nth(list.rest, position - 1);
  }
}

function prepend(element, list) {
 return list = {
   value: element,
   rest: list
 };
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {

 if(typeof obj1 !== typeof obj2 || obj1.length !== obj2.length || obj1 === null || obj2 === null){
  return false;
 }
 if(obj1 === obj2){
  return true;
 }
 for(let prop in obj1){
  return deepEqual(obj1[prop], obj2[prop]);
 }

}

// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
