/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
  var increm = Math.abs(step);
  var total= [];
  if(start < end)
  {
  
     for(var i = start; i <=end;i+=increm)
       total.push(i); 
  
      return total;   
  }
  else if(end < start)
  {
      for(var i = start; i >=end; i-=increm)
          total.push(i);
      
      return total;
  }
  else if(end === start)
      return end;
}

function sum(array) {
  var result = 0;
  for(var i = 0;i < array.length;i++)
      result+= array[i];

  return result;

}

// Problem 2: Reversing an Array
function reverseArray(array) {
  var GivenArray = array;
	var Result_Array = [];
  
  for(var i = GivenArray.length-1; i >= 0 ;i--)
  	Result_Array.push(GivenArray[i]);
	return Result_Array;
}

function reverseArrayInPlace(array) {
  var Result_Array= [];
  for(var i  = Existing_Array.length - 1; i >= 0; i--)
     Result_Array.push(Existing_Array[i]);
 
 return Result_Array;
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
}

function listToArray(list) {
  // Your code here
}

function nth(list, position) {
  // Your code here
}

function prepend(element, list) {
  // Your code here
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
