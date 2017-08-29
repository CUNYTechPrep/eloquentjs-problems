/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
  var rangeArray = [];

  if(start < end && step > 0) // counting up
  {
    for(var i = start; i <= end; i+=step)
      rangeArray.push(i);
    return rangeArray;
  }
  else if(start > end && step < 0) // counting down
  {
    for(var i = start; i >= end; i+=step)
      rangeArray.push(i);
    return rangeArray;
  }
}

function sum(arrayToSum) {
  var sum = 0;
  for (var i = 0; i < arrayToSum.length; i++){
    sum += arrayToSum[i];
  }
  return sum;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  var newArray = [];
  for(var i = array.length-1; i >= 0; i--)
    newArray.push(array[i]);

  return newArray;
}

function reverseArrayInPlace(array) {
  var j = array.length-1;
  for(var i = 0; i < Math.floor( array.length / 2 ); i++){
    var temp = 0;
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    j--;
  }
}

// Problem 3: A List
function arrayToList(array) {
  if (array.length > 0 ){
    var list = {
      value: array[array.length-1],
      rest: null
    };

    for(var i = array.length-2; i >= 0; i--)
      list = prepend(array[i], list);

    return list;
  }
}

function listToArray(list) {
  var array  =[];

  var position = 0;

  while( nth(list, position) !== undefined ) {
    array.push( nth(list, position) );
    position++;
  }

  return array;
}

function nth(list, number) {
  if (number === 0)
    return list.value;

  else if (list.rest !== null)
    return nth(list.rest, number-1);
}

function prepend(element, list) {
  var newList = {};
  newList.value = element;
  newList.rest = list;
  return newList;
}

// Problem 4: Deep comparison
function deepEqual(valueOne, valueTwo) {

  if( (typeof valueOne === "object" && valueOne !== null) &&
      (typeof valueTwo === "object" && valueTwo !== null) ){

    let propEqual = true;
    for(prop in valueOne){
      propEqual = deepEqual(valueOne[prop], valueTwo[prop]);
      if (!propEqual)
        return false
    }
    return true;
  }

  else {
    return (valueOne === valueTwo);
  }
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
