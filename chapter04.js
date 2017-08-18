/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */



 function range(start,end,step=1){
   result = []
   if (step < 0){
     var tmp = start;
     start = end;
     end = tmp;
   }
   for (var i=start; i<=end; i+=Math.abs(step)){
     result.push(i);
   }
   if (step < 0)
    return result.reverse()
   return result;
 }

 function sum (range){
   sum= 0;
   for (var i=0; i<range.length; i++){
     sum+= range[i];
   }
   return sum;
 }

 // console.log(sum(range(1,10)));

 function reverseArray(array){
   reversedArray = [];
   for (var i = array.length-1; i>=0; i--){
     reversedArray.push(array[i])
   }
   return reversedArray;
 }


 function reverseArrayInPlace(array){
   var tmp, j;
   var middle = Math.floor(array.length/2);
   for (var i=0; i< middle; i++){
     j=array.length-1-i;
     tmp = array[i];
     array[i] = array[j];
     array[j] = tmp;
   }
   return array;
 }

 // console.log(reverseArrayInPlace([2,3,6,7,9]))

 function arrayToList(array){
   list = null
   for (var i=array.length-1; i>=0; i--){
     var tmpObject = {value:array[i], rest:list}
     list = tmpObject;
   }
   return list;
 }


 function listToArray (list){
   var array = [];
   var i=0;
   current  = list;
   while (current != null){
     array[i++] = current.value;
     current = current.rest;
   }
   return array;
 }

 function prepend (element, list){
   var newNode = {value:element, rest:list};
   list = newNode;
   return list;
 }


 function nth (list, n){
   var curr = list;
   var i=0;
   while (curr != null){
     if (i == n){
       return curr.value;
     }
     curr = curr.rest;
     i++;
   }
   return undefined;
 }

 function nthRecursive (list, n){
   if (list == null)
     return undefined;
   if (n==0)
     return list.value;
   return nthRecursive(list.rest, n-1);
 }


 function deepEqual(value1, value2){
   if (typeof (value1) == 'object' && value1 != null && value2 != null){
     var getEntries = function(obj){
       var res = Object.keys(obj).map(function(key){
         var curr = [];
         curr.push(key);
         curr.push(obj[key]);
         return curr;
       });
       return res;
     };
     obj1 = getEntries(value1);
     obj2 = getEntries(value2);
     if (obj1.length != obj2.length)
       return false;
     for (var i=0; i<obj1.length; i++){
       if (!deepEqual(obj1[i][1], value2[obj1[i][0]]))
         return false;
     }
     return true;
   }
   else {
     return value1 === value2;
   }
 }



// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
