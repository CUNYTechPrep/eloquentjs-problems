/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range

  function range(start,end,step=1)
{
 var numbers =[];
  if(step > 0)
  {
    for (var i = start; i <= end; i += step)
    {
      numbers.push(i);
    }

  }
  if(step < 0)
  {
    for (var i = start; i >= end; i += step)
    {
      numbers.push(i);
    }

  }
  return numbers;
}

  function sum(numbers)
 {
   var total = 0;
  for(var i = 0; i < numbers.length;i++)
  {
    total = total+numbers[i];
  }
  return total;
 }


// Problem 2: Reversing an Array

  function reverseArray(original)
{
  var index = original.length-1;
  var reversed = [];
  for(var i = index; i >= 0;i--)
  {
   reversed.push(original[i]);
  }
  return reversed;
}

function reverseArrayInPlace(original)
{
  var length = (original.length/2);
  Math.floor(length);
  swap1 = original.length-1; // swap -1(this is from the end)
  swap2 = 0; //swap+1 (this is from the beginning of array)
  var index = 0;

  for(var i = length;i >= 0; i--)
  {
   var temp;
   temp = original[swap1-index];
   original[swap1-index] = original[swap2+index];
   original[swap2+index] = temp;
    index++;
  }

}


// Problem 3: A List
function arrayToList(arr)
{
  var list=null;
  for(var i = arr.length-1; i >= 0 ; i--)
  {
    list = {value: arr[i] , rest: list};
  }
  return list;
}

function listToArray(list)
{
  var newarray = [];
 for (var node = list; node; node = node.rest)
 {
 	newarray.push(node.value);
 }
  return newarray;
}
function prepend(element, list)
{
 var newlist = {value: element , rest: list };

  return newlist;
}
function nth(list,n)
{
  var val;
   for (var node = list; node; node = node.rest)
 {
 	if(node = n)
    {
      val = list.rest.value;
    }

 }
  return val;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2)
{ var count1 = 0;
  var count2 = 0;
   if (obj1 === obj2)
   {
     return true;
   }

  if (obj1 == null || typeof obj1 != "object" || obj2 == null || typeof obj2 != "object")
  {

    return false;

  }

 for (var prop in obj1) //loop through obj1
  {
   if (obj2.hasOwnProperty(prop))// checking if obj2 has the same property
   {
    if(!deepEqual(obj1[prop],obj2[prop]))// also checking if the two values within the property are equal
       {
         return false;
       }
    } // if the properties are equal they skip all of this and go straight to true;
     else
       {
       return false;
       }

    return true;
    }
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
