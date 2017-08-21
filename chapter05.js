/*
 * Add your solutions to the chapter 5 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */

// Problem 1: Flattening
var ancestry = require("./ancestry.js")

var combine = function(prev,current){
	return prev.concat(current);
  	//return prev + "," + current;
}

function flatten(arrays) {
  return arrays.reduce(combine)
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
// This makes sure the data is exported in node.js —

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {}
 ageDiff = [];


ancestry.forEach(function(person){
    byName[person.name] = person;
});

ancestry.forEach(function(person){
    if(byName[person.mother]){
        ageDiff.push(person.born - byName[person.mother].born);
    }
});

function averageMomChildAgeDiff() {
	return average(ageDiff)
}



// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
var centuryList = {};
var arr16= [];
var arr17= [];
var arr18= [];
var arr19= [];
var arr20= [];
var arr21= [];

var calculateAge = function(person)
{
	return person.died - person.born;
}

ancestry.forEach(function(person) {
	var century = Math.ceil(person.died / 100)
	
	switch(century){
		case 16: arr16.push(calculateAge(person))
			break;

		case 17: arr17.push(calculateAge(person))
			break;

		case 18: arr18.push(calculateAge(person))
			break;
		
		case 19: arr19.push(calculateAge(person))
			break;

		case 20: arr20.push(calculateAge(person))
			break;
		
		case 21: arr21.push(calculateAge(person))
			break;

		default: console.log("Error")
	}
	
});

centuryList[16] = average(arr16)
centuryList[17] = average(arr17)
centuryList[18] = average(arr18)
centuryList[19] = average(arr19)
centuryList[20] = average(arr20)
centuryList[21] = average(arr21)

function averageAgeByCentury() {
  // Your code here
  return centuryList;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

