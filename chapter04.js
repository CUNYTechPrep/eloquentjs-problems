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
  
      if (start > end) {
          numbers = bigToSmall(start, end, step);
      }
      else {
          numbers = smallToBig(start, end, step);
      }
  
      return numbers;
}

function sum(arr) {
  // Your code here
  answer = 0;
  for (var i = 0; i < arr.length; i++) {
      answer += arr[i];
  }

  return answer;
}

function smallToBig(start, end, step) {
  if (step === undefined) {
      step = 1;
  }

  var numbers = [];
  for(var i = start; i <= end; i += step) {
      numbers.push(i);
  }

  return numbers;
}

function bigToSmall(start, end, step) {
  if (step === undefined){
      step = -1;
  }

  var numbers = [];
  for(var i = start; i >= end; i += step) {
      numbers.push(i);
  }
  
  return numbers;
}

// Problem 2: Reversing an Array
function reverseArray(arr) {
  // Your code here
  var new_array = [];
  
  for (var i = arr.length - 1; i >= 0; i--) {
      new_array.push(arr[i]);
  }

  return new_array;
}

function reverseArrayInPlace(arr) {
  // Your code here
  var middle = Math.floor(arr.length / 2);
  var endValue = arr.length - 1;
  var temp = undefined;

  for(var i = 0; i < middle; i++) {
      temp = arr[i];
      arr[i] = arr[endValue];
      arr[endValue] = temp;
      endValue--;
  }
}

// Problem 3: A List
function arrayToList(arr) {
  // Your code here
  if (arr.length === 1) {
    var obj = {
        value : arr[0],
        rest : null,
    };

    return obj;
  } 

  else {
    var obj = {
        value : arr[0],
        rest : arrayToList(arr.slice(1)),
    };
    return obj;
  }
}

function listToArray(obj) {
  // Your code here
  var list = [];
  var loop = true;
  while (loop) {
      if (obj.rest != null) {
          list.push(obj.value);
          obj = obj.rest;
      }
      else {
          list.push(obj.value);
          loop = false;
      }
  }

  return list;
}

function nth(list, index) {
  // Your code here
  if (list === null) {
    return undefined;
  }
  else if (index === 0) {
    return list.value;
  }
  else {
    return nth(list.rest, index - 1);
  }
}

function prepend(element, list) {
  // Your code here
  newList = {
    value : element,
    rest : list,
  }

  return newList;
}

// Problem 4: Deep comparison
function deepEqual(value1, value2) {
  // Your code here
  let isValue1Object = value1 == null || typeof value1 != 'object';
  let isValue2Object = value2 == null || typeof value2 != 'object';

  if (value1 === value2) {
      return true;
  }

  if (isValue1Object || isValue2Object) {
      return false;
  }

  let value1Props = 0;
  let value2Props = 0;

  for (var prop in value1)
      value1Props += 1;

  for (var prop in value2) {
      value2Props += 1;
      if(!(prop in value1) || !deepEqual(value1[prop], value2[prop]))
          return false;
  }

  return value1Props == value2Props;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
