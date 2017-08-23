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
  var myArray = [];

  var myvar;

  

  if(start < end){

    if(arguments.length === 2){

      myvar = 1;

    }

    else{

      myvar = arguments[2];

    }

    

    for( var i = start; i <= end ; i = i + myvar){

        myArray.push(i);

    }

  }

  else{

    if(arguments.length === 2){

      myvar = -1;

    }

    else{

      myvar = arguments[2];

    }

    

    for(var j = start; j >= end; j = j + myvar){

      myArray.push(j);

    }

  }

  return myArray;

}

function sum(array) {
  // Your code here
   var sum = 0;

  for(var i = 0; i < array.length;i++){

      sum = sum + array[i];

    }

  return sum;

}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
  var newArray = [];

  for(var i = 0; i < array.length; i++){

      newArray.unshift(array[i]);

    }

  return newArray;  
}

function reverseArrayInPlace(array) {
  // Your code here

  for(var i = 0; i < array.length / 2; i ++){

    var temp = array[array.length - 1 - i];

    array[array.length - 1 - i] = array[i];

    array[i] = temp;

  }

  return array;  
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  var list = {value: array[array.length-1],rest:null};

    for(var i = array.length-2; i >= 0; --i){

      list = {value: array[i], rest:list};

    }

  return list;
  
}

function listToArray(list) {
  // Your code here
  var toValue = [];

  for (var node = list; node; node = node.rest) {

      toValue.push(node.value);

    }

  return toValue;

}

function nth(list, position) {
  // Your code here
  var times = 0;

  for (var node = list; node; node = node.rest) {

      if(times === position){

          return node.value;

        }

      ++times;

    }


}

function prepend(element, list) {
  // Your code here
  var list = { value: element, rest: list};

  return list;

}

// Problem 4: Deep comparison
function deepEqual(first, second) {
  // Your code here
  if((typeof first == "object" && first != null) && (typeof second == "object" && first != null)){

      if(Object.keys(first).length != Object.keys(second).length){

          return false;

        }

        for (var i in first) {

          if(second.hasOwnProperty(i)){

              if ( !deepEqual(first[i],second[i]) ){

                return false;

              }

            }

            else{

              return false;

            }

        }

      return true;

    }

  else if ( first === second){ return true; }

  else { return false; }

}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
