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

      var arr = [];

              var step = 1;

              if(arguments.length===3)

      var step = arguments[2];

  if(step>0){

              for(var i = start;i<=end;i+=step){

              arr.push(i);

    }

  }

  else{

              for(var i = start;i>=end;i+=step){

      arr.push(i);

    }

  }

              return arr;
	
}

function sum(array) {
  // Your code here
   var sum = 0;

              for(var i = 0;i<arr.length;i++){

      sum+=arr[i];

    }

  return sum;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  // Your code here
var temp = [];

              for(var i = array.length-1; i>-1;i--){

              temp.push(array[i]);

    }

              return temp;
}

function reverseArrayInPlace(array) {
  // Your code here
var temp;

              for(var i = 0;i<(array.length)/2;i++){

              temp = array[i];

              arr[i] = array[array.length-i-1];

              array[array.length-i-1]=temp;

    }

              return array;
}

// Problem 3: A List
function arrayToList(array) {
  // Your code here
    var list = null;

              for(var i = array.length-1;i>=0;i--){

              list = {value : array[i], rest : list};

    }

  return list;

}

function listToArray(list) {
  // Your code here
  var arr = [];

              for(var node = list;node;node=node.rest){

              arr.push(node.value);

    }

  return arr;

}

function nth(list, position) {
  // Your code here
if(!list)

    return undefined;

  if(position===0)

    return list.value;

  else{

              return nth(list.rest,position-1);

  }
}

function prepend(element, list) {
  // Your code here
 return {value:element,rest:list};
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
  // Your code here
var count1=0,count2=0;

              if((typeof obj1=='object' && obj1!=null) &&

       (typeof obj2=='object' && obj2!=null)){

              for(var key in obj1){

              count1++;

        }

              for(var key in obj2){

              count2++;

        }

              if(count1-count2!=0){

          return false;

        }

              for(var key in obj1){

          if(!(key in obj2) || !deepEqual(obj1[key],obj2[key])){

            return false;

          }

        }

              for(var key in obj2){

          if(!(key in obj1) || !deepEqual(obj2[key],obj1[key])){

            return false;

          }

          return true;

        }

    }

                             return obj1===obj2;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
