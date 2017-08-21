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
  var final_arr = [];
  if (step == 0) {
    return "The range cannot have intervals of zero";
  }
  else if (step < 0) {
    for (var i = start; i >= end; i += step) {
      final_arr.push(i);
    }
  }
  else {
    for (var i = start; i <= end; i += step) {
      final_arr.push(i);
    }
  } 
  return final_arr;
}

function sum(numbers) {
  // Your code here
  var total = 0;
  for (var i = 0; i < numbers.length; ++i) {
    total += numbers[i];
  }
  return total;
}

// Problem 2: Reversing an Array
function reverseArray(input_arr) {
  // Your code here
  var new_arr = [];
  for (var i = input_arr.length; i > 0; --i) {
    new_arr.push(input_arr[i - 1]);
  }
  return new_arr;
}

function reverseArrayInPlace(input_arr) {
  // Your code here
  var length = input_arr.length;
  // if number of elements in array is odd, no need to move the middle element (e.g. in [1, 2, 3], 2 does not have to move)
  if (length % 2 !== 0) {
    for (var left = 0, right = length - 1; left!=right; ++left, --right) {
      var temp_left = input_arr[left];
      input_arr[left] = input_arr[right];
      input_arr[right] = temp_left;
    }
  }
  // if number of elements in array is even, the two middle elements have to be moved (e.g. in [1, 2, 3, 4], 2 and 3 have to switch)
  else {
    for (var left = 0, right = length - 1; left<right; ++left, --right) {
      var temp_left = input_arr[left];
      input_arr[left] = input_arr[right];
      input_arr[right] = temp_left;
    }
  }
  return input_arr;
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
  length = array.length;
  if (length == 0) return null;
  list = { rest: null, 
    value: array[length - 1]
  }
  for (var i = length - 2; i >= 0; --i) {
    list = prepend(array[i], list);
  }
  return list;
}

function listToArray(input_list) {
  // Your code here
  var arr = [];
  for (var node = input_list; node != null; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

function nth(input_list, index) {
  // Your code here
  if (index < 0 || (index>0 && input_list.rest === null)) return undefined;
  else if (index !== 0) return nth(input_list.rest, index - 1);
  else return input_list.value;
}

function prepend(new_node_val, input_list) {
  // Your code here
  var list = {
    rest: input_list,
    value: new_node_val
  }
  return list;
}

// Problem 4: Deep comparison
function deepEqual(val1, val2) {
  // Your code here
  // check if both arguments are objects
  if ((typeof val1 === "object" && val1 !== null) && (typeof val2 === "object" && val2 !== null)) {
    // check if both objects have the same number of properties
    var val1_num_elements = 0;
    var val2_num_elements = 0;
    for (var property in val1) {
      ++val1_num_elements;
    }
    for (var property in val2) {
      ++val2_num_elements;
    }
    if (val1_num_elements !== val2_num_elements) return false;
    // check if both objects have the same properties
    for (var property1 in val1) {
      if ((property1 in val2) === false) return false;
    }
    // check if both objects have the same value for each property
    for (var property in val1) {
      return deepEqual(val1[property], val2[property]);
    } 
  }
  else {
    return val1 === val2;
  }
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
