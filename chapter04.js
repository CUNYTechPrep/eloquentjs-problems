/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start, end, step=1) {
  	var array=[];
	for(i=0;i<end;i++){
		array[i]=i+1;
	}

	return array;
}

function sum(array) {
  var sum=0;
for(i=0;i<array.length;i++){
	sum=sum+array[i];
}

	return sum;
}

// Problem 2: Reversing an Array
function reverseArray(array) {
  var newarray=[];
var p=0;
for(var i=array.length-1;i>=0;i--){
	newarray[p]=array[i];
	p++;
}
return newarray;
}

function reverseArrayInPlace(array) {
  var val=Math.floor(array.length/2);
	var hold=[];
	for(var i=0;i<val;i++){
		hold[i]=array[i];
		array[i]=array[array.length-1-i];
		array[array.length-1-i]=hold[i];
	}
}

// Problem 3: A List
function arrayToList(array) {
  var list=null;
for (var i = array.length - 1; i >= 0; i--){

list = {value: array[i], rest: list};
}
return list;
}

function listToArray(list) {
 	var array=[];
for (var node = list; node; node = node.rest) {
array.push(node.value);
}
return array;
}

function nth(list, position) {
  if (!list){ // to check if that node is emptry 
return "not found";
}

if (position == 0){ // when you find the location of n 

return list.value;
}
else{

return nth(list.rest, position - 1); // recursive

}
}

function prepend(element, list) {
var node ={value:element, rest:list}
return node;
}

// Problem 4: Deep comparison
	var CountValue1=0;
	var CountValue2=0;
function deepEqual(value1,value2){
	if(value1===value2 )
{
/*	console.log("instant equal");*/
	return true;
}
 if((typeof(value1)=="object" && value1!=null)&&(typeof(value2)=="object" && value2!=null))
 	{
 for(var i in value1)
	{
		CountValue1++;
	} //end of for
	for(var i in value2)
	{
		CountValue2++;
		if(i in value1){ //set of property names
 	if(deepEqual(value1[i],value2[i])){  // set of values
 		/*	console.log("checked property names and values");*/
			return true; 
		}else{ /*console.log("some value dont equal");*/ return false; }
		}else {/*console.log("some property names dont equal");*/ return false; }
		
if(CountValue1!==CountValue2){ /*console.log("unequal amount of property");*/ 
return false;}

	}// end of for
	} // end of if
/*console.log("if all dont turn true");*/
return false;
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
