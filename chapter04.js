/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
  step=step||1;
  var a=[];
    
    if(start<end&&step>0){
      for(var i=start; i<=end;i=i+step)
      {a.push(i);
      }
    }
    
    else if(end<start&&step<0){
      for(var i=start; i>=end;i=i+step)
      {a.push(i);
      }}
    
    return a;  // Your code here
}

function sum(array) {
  var s=0;
    for(var i=0;i<=array.length-1;i++){
        s=s+array[i];
    }
    return s;// Your code here
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  var a1=[];
  for(var i=array.length-1;i>=0;i--){
    a1.push(array[i]);
  }
  return a1;  // Your code here
}

function reverseArrayInPlace(array) {
  var temp=a[0];
  var l=a.length
  
    for(var i=0;i<=l%2;i++){
      temp=a[i];
      a[i]=a[a.length-1-i];
      a[a.length-1-i]=temp;
    }  // Your code here
}

// Problem 3: A List
function arrayToList(array) {
  var s=array.shift();
  if(s==undefined){return null;}
  else{
  var list={
    value:s,
    
    rest:arrayToList(array)
    
  }
  return list;}// Your code here
}

function listToArray(list) {
  var a=[];
  for(var node=list;node;node=node.rest)
  { a.push(node.value);
    }
  return a;  // Your code here
}

function nth(list, position) {
  while(pos){
    list=list.rest;
    position=position-1;
  }
  return list.value;  // Your code here
}

function prepend(element, list) {
  var list={
  value:element,
  rest:list
  }
  return list;// Your code here
}

// Problem 4: Deep comparison
function deepEqual(a, b) {
  if(a==b||a===b){return true}
  else if(typeof a==typeof b){
    if(typeof a=="object"){
      if(a!=null && b!=null){
        for ( var p in a ) {
          if ( ! a.hasOwnProperty( p ) ) continue;

          if ( ! b.hasOwnProperty( p ) ) return false;

          if ( a[ p ] === b[ p ] ) continue;

          if ( typeof( a[ p ] ) !== "object" ) return false;

          if ( ! deepEqual( a[ p ],  b[ p ] ) ) return false;
          }

          for ( p in b ) {
            if ( b.hasOwnProperty( p ) && ! a.hasOwnProperty( p ) ) return false;
     
          }
          return true;
      }         
      
      else return false;
    }
    else if (typeof a==number){return a==b}
  }
  else{return false;}}
// Your code here



// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
