/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step) { //step = 1 
  // Your code here
  if(step > 0){
     var array = []; 
  for (var i = start, i<end; step++){
    array.push(i); 
  }

  return array; 
}else if (step <0 ){
       var array = []; 
  for (var i = start, i<end; step--){
    array.push(i); 
  }

  return array; 
}else{

  var array = []; 
  for (var i = start, i<end; step++){
    array.push(i); 
  }

  return array; 
}
}

function sum(array) {
  // Your code here
  var sum = 0; 
  for(var i = 0; i<array.length; i++){
      sum = sum + array[i];
  }
  return sum; 
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
  var reverseArray = []; 
    for(var i = 0; i<array.length; i++){
      reverseArray[i] = array[array.length-(i+1)];
  }
  return reverseArray; 
}



function reverseArrayInPlace(array) {
  // Your code here
  var newArray = []; 

    for(var i = 0; i<array.length; i++){
      newArray[i] = array[array.length-(i+1)];
    }

}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  var list = {}; 
  for(var i = 0; i<array.length;i++){
    list.value = array[i]; // I was a litte stuck here because I was not sure how to import array value into list
  }
}

function listToArray(list) {
  // Your code here
  var array = []; 
    for (var node = list; node; node = node.rest) {
      array.push(node.value); 
  }
  return array; 

}

function nth(list, position) {
  // Your code here
  if(position<list.length){
    return list[position]; 
  }else{
    return "undefined"; 
  }
}

function prepend(element, list) {
  // Your code here
  return(value:value, rest:rest); 
}

// Problem 4: Deep comparison
function deepEqual(value1, value2) {
  // Your code here
  if (value1 === value2) {
    return true;
  } 
  else if (value1 === null || value2 === null) {
    return false;
  } 

  else {
    if (typeof(value1) === "object" || typeof(value2) === "object") {
      for (var key in value1) {
       
        if (JSON.stringify(value1[key]) === JSON.stringify(value2[key])) {
          return true;
        } else {
          return false;
        }
      }
      return false; 
    }
  }

}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
