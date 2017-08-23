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
    if (step === undefined)
  {
    if (start <= end) 
    {
      step = 1;
    }
    else 
    {
      step = -1; 
    }
  }
  
  var num_array = []
  if (start <= end)
  {
    for(i = start; i <= end; i = i +  step)
    {
      num_array.push(i);
    }
  }
  else
  {
    for(i = start; i >= end; i = i +  step)
    {
      num_array.push(i);
    }
  }

  return num_array;
}

function sum(num_array) {
  // Your code here
    var sum = 0;
  length_of_array = num_array.length;
  for (i = 0; i < length_of_array; i = i + 1)
  {
    sum = sum + num_array[i]; 
  }
  
  return sum;
}

// Problem 2: Reversing an Array
function reverseArray(input_array) {
  // Your code here
    last_idx = input_array.length - 1;
  var output_array = [];
  for (i = last_idx; i >= 0; i -= 1)
  {
    output_array.push(input_array[i]); 
  }
  
  return output_array;
}


function reverseArrayInPlace(input_array) {
  // Your code here
    mid_idx = Math.floor(input_array.length/2);
  last_idx = input_array.length - 1;
  for (i = 0; i < mid_idx; i++)
  {
    var temp = input_array[i];
    input_array[i] = input_array[last_idx - i];
    input_array[last_idx - i] = temp;
  }
  
}

// Problem 3: A List
function arrayToList(input_array) {
  // Your code here
      var end_idx = input_array.length - 1;
    var list = {value:input_array[end_idx], rest:null}
    for (var i = end_idx - 1; i >= 0; i--)
    {
       list = prepend(input_array[i],list);      
    } 
    return list;
}

function listToArray(list) {
  // Your code here
    var output_array = [];
  for (var node = list; node; node = node.rest)
  {
    output_array.push(node.value);
  }
  
  return output_array;
}


function nth(list, number) {
  // Your code here
      if (list === null)
    {
      return undefined;
    }
  else if (number === 0)
    {
      return list.value;
    }
    else
    {
      return nth(list.rest, number - 1);
    }
}

function prepend(input_value, input_list) {
  // Your code here
  var list = {value:input_value, rest:input_list};
  return list;

}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
    if (obj1 === obj2)
  {
    return true;
  }

  if ( (typeof obj1 == "object" && obj1 != null) && 
       (typeof obj2 == "object" && obj2 != null))
  {
    obj1_prop_counter = 0;
    obj2_prop_counter = 0;
    
    for(var propt in obj1)
    {
      obj1_prop_counter++;
    }
    
    for(var propt in obj2)
    {
      obj2_prop_counter++;
    }
    
    if (obj1_prop_counter != obj2_prop_counter)
    {
      return false;
    }
    else
    {
      for(var propt in obj1)
      {
        if (propt in obj2)
        {
          return deepEqual(obj1[propt], obj2[propt]); 
        }
        else
        {
          return false;
        }
      }
      return true;
    }

  }
  else 
  {
    return false;    
  }
  

    
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
