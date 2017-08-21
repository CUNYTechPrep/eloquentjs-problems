/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(s, e, by){
  var arr = [];
  for(i = s; !((s<e && i>e) || (s>e && i<e));){
    arr.push(i);
    if(by == null){
      if(s<e)
        i++;
      else
        i--;
    }
    else
      i+=by;
  }
  return arr;
}

function sum(arr){
  var sum = 0;
  for(i = 0; i < arr.length; i++)
    sum+= arr[i];
  return sum;
}

// Problem 2: Reversing an Array
function reverseArray(arr){
  var n_arr = [];
  for(i = arr.length; i > 0; i--)
    n_arr[arr.length-i] = arr[i-1];
  return n_arr;
}

function reverseArrayInPlace(arr){
  for(i = 0; i < arr.length/2; i++){
    var temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
  }
}


// Problem 3: A List
function arrayToList(arr){
  var head ={ value:arr[0], rest:null};
  temp = head;
  for (i = 1; i < arr.length; i++){
    obj = {value: arr[i], rest:null};
    temp.rest = obj;
    temp = obj;
  }
  return head;
}

function listToArray(list){
  var arr = [];
  var i = 0;
  temp = list;
 while(temp != null){
    arr[i] = temp.value;
    temp = temp.rest;
    i++;
  }
  return arr;
}

function prepend(element, list){
  var head ={ value:element, rest:list};
  return head;
}

function nth(list, n){
  temp = list;
  for (i = 0 ; i <= n; i++){
    if(temp == null)
      return "undefined";
    else if (i == n)
      return temp.value;
    temp = temp.rest;
  }
}


// Problem 4: Deep comparison
function deepEqual(obj1, obj2){
  if(obj1 == null || obj2 == null)
    return true;
  else if ( typeof obj1 != typeof obj2){
    if(typeof obj1 != "undefined" && typeof obj2 != "undefined" )
      return false;
  }
  else{
    if (obj1.length != obj2.length)
      return false;
    else if (obj1.length == 1 && obj1 == obj2)
      return true;
    else{
    for(x in obj1){
      if (!deepEqual(obj1[x],obj2[x]))
        return false;
    }
    return true;
    }
  }
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
