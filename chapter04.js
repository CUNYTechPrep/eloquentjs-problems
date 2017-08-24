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
  var listOfNumbers = [];

  listOfNumbers.push(start);
  while (start !== end+1 - Math.abs(step)) {
    start += step;
    listOfNumbers.push(start);
  }

  return listOfNumbers;
}

function sum(arrayOfNumbers) {
  // Your code here
  var sumOfNumbers = 0;

  //using provided function .forEach() method
  arrayOfNumbers.forEach(function(number){   
    sumOfNumbers += number;
  });

  /*//using for loop
  for (var i = 0; i < arrayOfNumbers.length; i++) {
    sumOfNumbers += arrayOfNumbers[i];
  }*/

  return sumOfNumbers;
}

// Problem 2: Reversing an Array
function reverseArray(arrayOfValues) {
  // Your code here
  var newArrayValue = [];
  
  // using .push() method
  for (var i = arrayOfValues.length - 1; i >= 0; i--) {
    newArrayValue.push(arrayOfValues[i]);
  }
  
  /* // using revere method
  arrayOfValues.reverse().forEach(function(number){
    newArrayValue.push(number);
  }); */

  return newArrayValue;
}

function reverseArrayInPlace(arrayOfValues) {
  // Your code here
  var temp;
  var lastIndexOfArray = arrayOfValues.length-1;

  for (var i = 0; i < lastIndexOfArray/2; i++) {
    temp = arrayOfValues[i];
    arrayOfValues[i] = arrayOfValues[lastIndexOfArray - i];
    arrayOfValues[lastIndexOfArray - i] = temp;
  }
}

// Problem 3: A List
function arrayToList(numbers) {
  // Your code here
  var list = null;

  for (var i = numbers.length - 1; i >= 0; i--) {
    list = {
      value: numbers[i],
      rest: list
    }
  }

  return list;
}

function listToArray(list) {
  // Your code here
  var arrayOfList = [];

  /* iterate over a list */
  // node points to the current sublist, 
  // and the body can read its value property to get the current element.
  for (var node = list; node; node = node.rest) {
    arrayOfList.push(node.value);
  }

  return arrayOfList;
}

function nth(list, index) {
  // Your code here
   var listArray = listToArray(list);

  return listArray[index];

}

function prepend(number, list) {
  // Your code here
  var newlist = {
    value: number,
    rest: list
  };

  return newlist;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
  // object into json string
  var obj1String = JSON.stringify(obj1); 
    var obj2String = JSON.stringify(obj2);
 
    if (obj1String === obj2String)
      return true;
    else 
     return false; 
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
