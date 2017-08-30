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
    var returnArr = [];
    if (step > 0)
    {
      for (var i = start; i <= end; i += step)
      {
        returnArr.push(i);
      }
    }
    else
    {
      for (var i = start; i >= end; i += step)
      {
        returnArr.push(i);
      }
    }
  return returnArr;
}

function sum(array) {
  // Your code here
  var returnSum = 0;
  for (var i = 0; i < array.length; i++)
    {
      returnSum += array[i];
    }
  return returnSum;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
  var returnArr = [];
  for (var i = array.length - 1; i >=0; i--)
    {
      returnArr.push(array[i]);
    }
  return returnArr;
}

function reverseArrayInPlace(array) {
  // Your code here
  var temp;
  for (var i = 0; i <= Math.floor(array.length/2); i++)
    {
        temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
  return array;
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  var list = null;
  for(var i = array.length - 1; i >=0; i--)
  {
     list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  // Your code here
  var arr = [];
  for (var node = list; node; node = node.rest) {
    arr.push(node.value);

  }
  return arr;
}

function nth(list, position) {
  // Your code here
  var countDown = 0;
  for (var node = list; node; node = node.rest) {
    if (countDown == position)
    {
      return node.value;
    }
    countDown += 1;
  }
  return undefined;
}

function prepend(element, list) {
  // Your code here
  var tempArr = listToArray(list);
  tempArr.unshift(element);
  return arrayToList(tempArr);
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
  if ((typeof obj1 == "object" && obj1 != null) && (typeof obj2 == "object" && obj2 != null)) {
    
    if (Object.keys(obj1).length != Object.keys(obj2).length)
      return false;
    
    for (var x in obj1) 
    {
        if (!(x in obj2) || !deepEqual(obj1[x], obj2[x]))
          return false;
    }
    return true;
  }
  else 
  {
    return obj1 === obj2;
  }

}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
