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
    for(var x = start; x <= end; x = x + step)
      arr.push(x);
    for(var x = start; x >= end; x = x + step)
      arr.push(x);
    return arr;
}

function sum(array) {
  var sum = 0;
    for (elements in array)
      var sum = sum + array[elements];

    return sum;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
 var newArr =  [];

for (index in array)
  {
    newArr.push(array[index]);
  }
var count = 0;
for (var x = array.length-1 ;x!=count ;x--)
  {
  var temp = newArr[count];
  newArr[count]= newArr[x];
  newArr[x] = temp;
  count++;
  }
return newArr;
}

function reverseArrayInPlace(array) {
 var count = 0;
for (var x = array.length-1 ;x!=count ;x--)
  {
  var temp = array[count];
  array[count]= array[x];
  array[x] = temp;
  count++;
  }
}

// Problem 3: A List
function arrayToList(array) {
  var list = {value: array[array.length-1], rest:null};
  for (var x = array.length-2; x >= 0; x--)
  {
    list = prepend(array[x],list);
  }
  
return list;
}

function listToArray(list) {
 var arr = [];
  while (list != null)
  {
    arr.push(list.value);
    list = list.rest
    
  }
  return arr;
}

function nth(list, position) {
 if (position == 0)
  {
    return list.value;

  }


  else if (list.rest != null && position > 0)
  {
    list = list.rest
    return  nth(list,position-1);
    
  }

  else 
  {
    return undefined;
  }
}

function prepend(element, list) {
  var newList = 
  {
    value: element,
    rest: list
  }

  return newList;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
    if ((typeof obj1 == "object" && obj1 != null) && (typeof obj2 == "object" && obj2 != null)) {
    if (Object.keys(obj1).length != Object.keys(obj2).length)
      return false;

    for (var prop in obj1) {
      if (obj2.hasOwnProperty(prop))
      {  
        if (! deepEqual(obj1[prop], obj2[prop]))
          return false;
      }
      else
        return false;
    }

    return true;
  }
  else if (obj1 !== obj2)
    return false;
  else
    return true;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
