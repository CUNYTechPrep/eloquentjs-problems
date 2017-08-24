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
  if(typeof step !== "undefined"){
       var i = start;
    do{
      arr.push(i);
      i += step;
    }
    while(i != end);
    arr.push(end);
  }
  else{
    for(var i = start; i<=end; i++)
      arr.push(i);
  }
  return arr;
}

function sum(arr) {
  // Your code here
  var sum=0;
  for(var i=0; i<arr.length; i++){
     sum += arr[i];
  }
  return sum;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
   var newArr = [];
      for(var i=arr.length-1; i>=0; i--){
      newArr.push(arr[i]);
    }
  return newArr;
}

function reverseArrayInPlace(arr) {
  // Your code here
  var temp;
  var j = arr.length-1;

  for(var i = 0; i < j/2; i++){
    temp = arr[i];
    arr[i] = arr[j-i];
    arr[j-i] = temp;
  }
}

// Problem 3: A List
function arrayToList(arr) {
  // Your code here
  var list ={};
      if(typeof arr[0] !== "undefined"){
          list = {
            value : arr[0],
              rest : arrayToList(arr.slice(1, arr.length))
        };
    }
      if(typeof arr[0] == "undefined")
      list = null;
      return list;
}

function listToArray(list) {
  // Your code here
  var arr = [];

      if(list.value !== null){
          arr.push(list.value);

          if(list.rest !== null){
            for(var i=0; i< listToArray(list.rest).length; i++)
                arr.push(listToArray(list.rest)[i]);
        }
    }
  return arr;
}

function nth(list, position) {
  // Your code here
  var element;

    if(position == 0)
        element = list.value;
       else if(list.rest !== null)
        element = nth(list.rest, position-1);
      else
          element = 'undefined';

    return element;
}

function prepend(element, list) {
  // Your code here
  var newList = {
        value: element,
        rest : list
    };

  return newList;
}

// Problem 4: Deep comparison
function deepEqual(val1, val2) {
  // Your code here
  if( (typeof val1 == 'object' && val1 !== null) &&
     (typeof val2 == 'object' && val2 !== null) ){

      var keyCount1 = 0;
      var keyCount2 = 0;

      for(var key in val1) keyCount1++;
      for(var key in val2) keyCount2++;

      if(keyCount1 !== keyCount2) return false;

      for(var key in val1){
        if( !(key in val2) || !deepEqual(val1[key], val2[key]) ) return false;
      }

      return true
    }
    else{
        if(val1 === val2) return true;
        else return false;
      }
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
