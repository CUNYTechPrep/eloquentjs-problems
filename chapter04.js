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
  if(step < 0){
    for(i=start;i>=end;i+=step) {
      arr.push(i)
    }
  } else {
    for(i=start;i<=end;i+=step){
      arr.push(i);
    }
  }
  return arr;
}

function sum(arr){
  var sum = 0;
  for(i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  return sum;
}

// Problem 2: Reversing an Array
function reverseArray(arr) {
  var rev = [];
  for(i=0;i<arr.length;i++){
    rev.unshift(arr[i]);
  }
  return rev;

}

function reverseArrayInPlace(arrayValue) {
  var x;
  for(i=0;i<(arrayValue.length/2);i++){
    x = arrayValue[i];
    arrayValue[i] = arrayValue[arrayValue.length-1-i];
    arrayValue[arrayValue.length-1-i] = x;
    console.log(arrayValue)
  }
  return arrayValue
}

// Problem 3: A List
function arrayToList(arr, fob){
  if(arr.length == 0)
    return fob;
  //test wants null rather than undefined
  if (typeof fob == 'undefined'){ 
  var list = {
    value: arr.pop(),
    rest: null
  }}
  else
  	var list = {
    value: arr.pop(),
    rest: fob
    }
  return arrayToList(arr,list);}

function listToArray(fob, arr){
  if(typeof fob == 'undefined' | fob == null){
    return arr;
  }
  if(typeof arr == 'undefined'){
    arr = [];
  }
  arr.push(fob.value);
  return listToArray(fob.rest,arr);
}

function nth(fob, x){
  if(x==0)
    return fob.value;
  else
    return nth(fob.rest, x-1);
}

function prepend(x, fob){
  var fab = {value: x, rest: fob};
  console.log(fab)
  return fab
}

// Problem 4: Deep comparison
function deepEqual(thing1,thing2){
  if(typeof thing1 != "object" && typeof thing2 != "object") {
    return (thing1 == thing2) }

  if(thing1 != null && thing2 != null) {
    for(var name in thing1){
      console.log("Comparing " + name)
      if(!deepEqual(thing1[name],thing2[name])) {
        return false }
    }
  }
  return true

}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
