/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
  let result = [];
  if(step < 0){
    for(;start >= end; start += step){
    result.push(start);
    }
  }
  else if(step > 0){
    for(;start <= end; start += step){
    result.push(start);
    }
  }
  return result;
}

function sum(numArray){
  let result = 0;
  for(let i = 0; i < numArray.length; i++){
    result += numArray[i];
  }
  return result;
}

// Problem 2: Reversing an Array
function reverseArray(arr){
  let result = [];
  for(let i = arr.length - 1; i >= 0; i--){
    result.push(arr[i]);
  }
  return result;
}

function reverseArrayInPlace(arr){
  let temp;
  for(let i = 0, j = arr.length -1; i < j; i++, j--){
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  // return arr;
}

// Problem 3: A List
function list(val,next=null){
  this.value = val;
  this.rest = next;
}

function arrayToList(arr){
  let item = null;
  for(let i = arr.length - 1; i >= 0; i--){
    item = new list(arr[i],item);
  }
  return item;
}

function listToArray(inputList){
  let resultArray = [];
  while(inputList != null){
    resultArray.push(inputList.value);
    inputList = inputList.rest;
  }
  return resultArray;
}

function nth(inputList, index){
  while(inputList != null && index != 0){
    inputList = inputList.rest;
    index--;
  }
  if(inputList == null){
    return undefined;
  }
  return inputList.value;
}

function prepend(element,inputList){
  return new list(element,inputList);
}

// Problem 4: Deep comparison
function deepEqual(first, second){
  if(typeof first == typeof second){
    if(typeof first == 'object' && first != null){
      let firstProps = []
      for(let property in first){
        firstProps.push(property);
        firstProps.push(first[property]);

      }
      let secondProps = []
      for(let property in second){
        secondProps.push(property);
        secondProps.push(second[property]);
      }
      for(let i = 0; i < firstProps.length; i++){
        if(!deepEqual(firstProps[i],secondProps[i])){
          return false;
        }
      }
      return true;
    }
    else {
      return (first == second);
    }
  }
  else {
    return false;
  }
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
