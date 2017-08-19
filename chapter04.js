/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range

/*
range function take 3 parameters: from, to and amount
create an empty array
if amount is null, set amount by default to 1

if from < to, use for loop to push value into array from -> to increasingly

if from > to, use for loop to push value into array decreasingly by the 
amount value

*/
function range(start, end, step=1) {
  var array = [];

    if(start < end)
    {
      for(var i = start; i <= end; i = i + step)
      {
        array.push(i);
      }
    }
    else if(start > end)
    {
      for(var j = start; j >= end; j = j + step)
      {
        array.push(j);
      }
    }
  return array;
}

/*
function sum that take array parameter. Using high-order function
to go each element of the array and add them.
*/
function sum(array) {
  var total = array.reduce(function(element, current)
               { 
    return element + current;
  }, 0);
  return total;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  var newArray = [];

  for(var i = array.length - 1; i >= 0; i--)
  {
    newArray.push(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  var temp;

  for(var i = 0; i < array.length/2; i++)
  {
    temp = array[i];
    array[i] = array[array.length - i -1];
    array[array.length - i - 1] = temp;
  }
  return array;
}

// Problem 3: A List
/*
  create an empty list 
  using for loop to put the value into list, and point the rest to next list
  return the list
*/
function arrayToList(array) {
 var list = null;

  for(var i = array.length - 1; i >=0; i--)
  {
    list = 
    { 
      value : array[i],
      rest: list
    };
  }
  return list;
}

/*
  create an empty array

  while list is not null, push the value into array, and go to the next list 
  to put the value into array.
  return the array
*/
function listToArray(list)
{
  var array = [];

  while(list !== null)
  {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}

/*function which takes a list and a number and returns the element at
the given position by using recursive */
function nth(list, position) {
  if(position === 0)
  {
    return list.value;
  }
  else if(list === null)
  {
    return undefined;
  }
  else
  { 
    return nth(list.rest, position - 1);
  }
}

/* function that takes an element and a list and creates a
new list that adds the element to the front of the input list*/
function prepend(element, list) {
  var newList = null;

  newList =
  {
    value: element,

    rest: list
  };

  return newList;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // condition if they are the same object
    if (obj1 === obj2)
    {
      return true;
    }

    /*
        property1 and property2 to get the array that contain the property
        of obj1 and obj2.
        Then check their length if they are equal
    */

    var property1 = Object.getOwnPropertyNames(obj1);
    var property2 = Object.getOwnPropertyNames(obj2);

    if(property1.length !== property2.length)
    {
      return false;
    }

    /*
    Using typeof to check the object type. Also, checking to make sure object 
    not equal to null, since typeof null also is an object
    */

    if ((typeof obj1 !== typeof obj2) && (obj1 === null || obj2 === null))
    {
      return false;
    }
   
    /*
    for loop to check the each property in the obj1
    if obj2 has the same property of obj1, use recursive to check next propety
    else if obj2 doesnt have the same property of obj1, return false

    */
    for (var prop in obj1) 
    {
      if ((obj2.hasOwnProperty(prop)))
        { 
      if (!(deepEqual(obj1[prop], obj2[prop])))
        { 
              return false;
        }
        }
        else
        {
          return false;
        }
  }
  return true;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
