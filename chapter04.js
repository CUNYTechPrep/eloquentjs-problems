/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
  	var arr = [];
    if(step > 0){
        for(var s=start;s <= end; s+=step){
            arr.push(s);
        }
    }else{
        for(var s=start;s >= end; s+=step){
            arr.push(s);
        }
    }
    return arr;
}

function sum(arr=[]) {
	//console.log(arr);
	var sum=0;
    for(var i=0;i<arr.length;i++){
        sum += arr[i];
    }
    /*
    Or use array.reduce for faster iteration
    sum = arr.reduce((pv,cv) => pv + cv,0);
    */
	return sum;
}

// Problem 2: Reversing an Array
function reverseArray(a) {
	var newArray = [];
	for(var i=a.length -1 ; i>= 0;i--){
		newArray.push(a[i]);
	}
	return newArray;
}

function reverseArrayInPlace(a) {
	var len = a.length;
    for(var i=0;i<Math.floor(len / 2);i++) {
        var tmp = a[i];
        a[i] = a[len-i-1];
        a[len-i-1] = tmp;
    }
    return a;
}

// Problem 3: A List
function arrayToList(arr) {
   for(var i=arr.length;i--;) { 
        var list = {value: arr[i],rest: list || null}; 
    } 
    return list;
}

function listToArray(list) {
	var arr = [];
    for (var node = list; node; node = node.rest) {
        arr.push(node.value);
    }
	return arr;
}

function nth(list, position) {
  var node = list;
    for(var i=0;i<position;i++) {
        node = node.rest;
    }
    if(node != undefined)
        return node.value;
    else
        return undefined;
}

function prepend(element, list) {
	list = {value: element, rest: list}
    return list;
}

// Problem 4: Deep comparison
function deepEqual(obj1, obj2) {
    if(typeof obj1 != "object" && obj1 != null) {
        return obj1 == obj2;
    }
    for(var property in obj1) {
         if (!obj2.hasOwnProperty(property)) {
            return false;
         }
         var ans = deepEqual(obj1[property],obj2[property]);
         if(ans == false) return false;
    }
    return ans;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
