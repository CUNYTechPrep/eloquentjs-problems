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
  var val = [];
  if(arguments.length == 2){
  for(var i=start;i<=end;i++)
    val.push(i);
  }else{
    if(step > 0){
      for(var i=start;i<=end;i+=step)
      val.push(i);
    }else{
      for(var i=start;i>=end;i+=step)
        val.push(i);
    }
  }
  return val;
}

function sum(array) {
  // Your code here
  var sum = 0;
  for(var i=array.length;i>0;i--)
    sum+=array.pop();
  return sum;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
  var val = [];
  var j = array.length - 1;
  for(var i=0;i<array.length;i++){
    val[i] = array[j];
    j--;
  }
  return val;
}

function reverseArrayInPlace(array) {
  // Your code here
  var j = array.length - 1;
  var temp;
  
  for(var i=0;i<Math.floor(array.length/2);i++)
  {
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    j--;
  }
  return array;
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  var list = {value: array[array.length - 1], rest: null};
  
  for(var i = array.length-2; i >= 0; i--){
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  // Your code here
  var array = [];
  var i = 0;
  
  for(node = list; node; node = node.rest){
    array[i] = node.value;
    i++;
  }
  return array;
}

function nth(list, position) {
  // Your code here
  if(position == 0)
    return list.value;
  for(var i = 1; i <= position; i++){
    list = list.rest;
  }
  return list.value;
}

function prepend(element, list) {
  // Your code here
  var newList = {value: element, rest: null};
  newList.rest = list;
  return newList;

}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
  if(typeof obj1 == "object" && typeof obj2 == "object" 
     && obj1 != null && obj2 != null){
    var i = 0, j = 0;
    for(var k in obj1){
      if(obj1.hasOwnProperty(k))
        i++;}
    for(var k in obj2){
      if(obj2.hasOwnProperty(k))
        j++;}
    if(i == j){
      for(var k in obj1){
        if(obj1.hasOwnProperty(k) && obj2.hasOwnProperty(k) 
           && deepEqual(obj1[k], obj2[k]))
          return true;
        else 
          return false;
      }
    }else
      return false;
  }else
    return obj1 === obj2;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
