/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
  // we create an empty array that is local to this function:
  var range = [];
  if(step == null)  step = 1;

    if(step > 0) {
      for(var i = start; i <= end; i += step) {
        range.push(i);
      }
    }
    else {
      // The for loop change condition is negative, so the for loop iterates
      // until its for loop checker(i >= end) is no longer true.
      for(var i = start; i >= end; i+= step) {
       range.push(i) ;
      } 
    } 
    // Next, we check if 
    return range;

}

function sum(array) {
  // Your code here
  var sumOfElements = 0;
  for(var i = 0; i < array.length; i++) {
    sumOfElements += array[i];
  }
  return sumOfElements;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
   var tempArray = [];
  // the last indexed element is arrayArgument.length - 1
  var j;
  for(var i = (array.length - 1); i >= 0; i--) {
    tempArray.push(array[i]);
  }
  // Next, we return
  return tempArray;
 
}

function reverseArrayInPlace(array) {
  var tempArray = [];
  // the last indexed element is arrayArgument.length - 1
  for(var i = (array.length - 1); i >= 0; i--) {
    tempArray.push(array[i]);
  }
  // Next, we change the value of each element in the parameterized array
  for(var i = 0; i < tempArray.length; i++) {
    array[i] = tempArray[i];
  }
  //Actually, I think it's a side effect function since we don't return anything
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  var list = null; //Note: I think that list is a keyword.
  for(var i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  // Your code here
   var tempArray = [];
  for(var node = list; node; node = node.rest) {
    tempArray.push(node.value);
    // Note: we don't push the rest member variable/property
  } 
  return tempArray;
}

function nth(list, position) {
  // Your code here
   if(!list) {
    return undefined;
  }
  else if( position == 0 ) {
    return list.value;
  }
  else {
    return nth( list.rest, position - 1 );
  }

}

function prepend(element, list) {
  // Your code here
     return {value: element, rest: list};
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
   var firstNumberOfProperties = 0;
  var secondNumberOfProperties = 0;
  var isEquivalent = true;
  //First, we check if the variables are equal or the objects are identical just in case we have variables first or 
// to save runtime when we have identical objects.
  //(meaning that they have the same reference)
  if(obj1 === obj2) {
    return true;
  }
  // Next we check whether at least one of the arguments are null 
  // or at least one of the  either of them 
  //
  if((typeof obj1 == null) || (typeof obj2 == null) 
     || (typeof obj1 != "object") || (typeof obj2 != "object")) {
    return false;
  }
  // Now that we verified that neither of the arguments are null and both are
  // are either equal variables(or identical objects) or both are objects: 
      for (var property in obj1) {
        //we count the amount of properties
        if (obj1.hasOwnProperty(property)){
             firstNumberOfProperties += 1;
        }
      }
    for(var property in obj2) {
      if(obj2.hasOwnProperty(property)){
        secondNumberOfProperties += 1;
        if((property in obj1) &&
           (!deepEqual(obj1[property], obj2[property]))){
          // In this if statement condition, we check if the property name/key
          // is also in the first argumeent object, and we recursively call the
          // deepEqual function on all of the properties to see if the 
          // properties are equal(*Note*:we could also use === instead to tell 
          //if the variables are equal and the objects are identical, but the deepEqual function 
	   // does a deep comparison)
        return false;
        }
      }
    }
    return firstNumberOfProperties == secondNumberOfProperties;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
