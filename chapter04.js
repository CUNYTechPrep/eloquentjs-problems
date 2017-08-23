/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step = 1)
{
  let tempArray = []
  if (step > 0)
  {
    for(i = start; i <= end; i+=step)
    {
      tempArray.push(i)
    }
  }
  else
  {
    for(i = start; i >= end; i+=step)
    {
      tempArray.push(i)
    }
  }
  return tempArray
}

function sum(nums)
{
  sum = 0
  for(i = 0; i < nums.length; i++)
  {
    sum += nums[i]
  }
  return sum
}

// Problem 2: Reversing an Array
function reverseArray(original)
{
  newArray = []
  for(i = original.length - 1; i >= 0; i--)
  {
    newArray.push(original[i])
  }
  return newArray
}

function reverseArrayInPlace(original)
{
  temp = null
  for(i = 0; i <= Math.floor(original.length/2); i++)
  {
    temp = original[i]
    original[i] = original[original.length - 1 - i]
    original[original.length - 1 - i] = temp
  }
  return original
}

// Problem 3: A List
function arrayToList(arr)
{
  list = null
  for(i = arr.length - 1; i >= 0; i--)
  {
    list = {value: arr[i], rest: list}
  }
  return list
}


function listToArray(list)
{
  arr = []
  for (let node = list; node; node = node.rest) 
  {
    arr.push(node.value)
  }
  return arr
}

function nth(list, num)
{
  if (num == 0)
    return list.value
  else
    return nth(list.rest, num - 1)
}

function prepend(element, list) 
{
  return {value: element, rest: list}
}

// Problem 4: Deep comparison
function deepEqual(a, b) 
{
  let aProperties = 0 
  let bProperties = 0
  
  if (a != null || b != null)
  {
    if (a != b)
    {
      for (let prop in a)
      {
        aProperties++
      }

      for (let prop in b) 
      {
        bProperties++
        if ((prop in a) == false || deepEqual(a[prop], b[prop]) == false)
        {
          return false
        }
      }
    }
  }

  else
    {
      return false
    }

  return aProperties == bProperties
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
