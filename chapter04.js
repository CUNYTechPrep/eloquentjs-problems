/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
  var increm = Math.abs(step);
  var total= [];
  if(start < end)
  {
  
     for(var i = start; i <=end;i+=increm)
       total.push(i); 
  
      return total;   
  }
  else if(end < start)
  {
      for(var i = start; i >=end; i-=increm)
          total.push(i);
      
      return total;
  }
  else if(end === start)
      return end;
}

function sum(array) {
  var result = 0;
  for(var i = 0;i < array.length;i++)
      result+= array[i];

  return result;

}

// Problem 2: Reversing an Array
function reverseArray(array) {
  var GivenArray = array;
	var Result_Array = [];
  
  for(var i = GivenArray.length-1; i >= 0 ;i--)
  	Result_Array.push(GivenArray[i]);
	return Result_Array;
}

function reverseArrayInPlace(array) {
  var Result_Array= [];
  for(var i  = Existing_Array.length - 1; i >= 0; i--)
     Result_Array.push(Existing_Array[i]);
 
 return Result_Array;
}

// Problem 3: A List
function arrayToList(ArrayInput)
{
	var Result_LIST = null;
 	for(var index = ArrayInput.length-1; index >= 0; index--)
    {
      	Result_LIST = {value: ArrayInput[index], rest: Result_LIST};  			    
    }
  return Result_LIST;
}

function listToArray(ListInput)
{
  	if(ListInput === null)
    	return null;
	
  	var Temp_Array = [];
  	while(ListInput !== null)
    {
      Temp_Array.push(ListInput.value);
      ListInput = ListInput.rest;
    }
  return Temp_Array;
}

function prepend(Value,Rest)
{
  return {value: Value, rest: Rest};
}

function nth(ListInput,Num_Iteration)
{
   var counter = 0;
	while(counter !== Num_Iteration && ListInput !== null)
    {
      	ListInput = ListInput.rest;
     	counter++;      	
    }
  return ListInput.value;
}

// Problem 4: Deep comparison
function deepEqual(FObj,SObj)
{
	if(FObj === SObj)return true;
    
  if(FObj == null || SObj == null || typeof FObj != "object"|| typeof SObj != "object")return false;
    
  var FObjProp = 0; SObjProp = 0;
  	
  	for(var index in FObj)
  		FObjProp++;
  	for(var index in SObj)
    { 
      SObjProp++;
     
      if(!(index in FObj) || !deepEqual(FObj[index],SObj[index]))
        return false; 
    } 
  	return FObjProp == SObjProp;
}

// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
