/*
 * Add your solutions to the chapter 5 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */
const ancestry = require('./ancestry');

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

const byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});


// Problem 1: Flattening
function flatten(array) {
  // Your code here
  var flattedArray = []; 

	for (var i = 0; i < array.length; i++) {
			flattedArray = flattedArray.concat(array[i]);
	}

	return flattedArray;
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  // Your code here
  // filter only the children who have mother with her birthday
	var childlenWithMother = ancestry.filter(function(person){
		return byName[person.mother];
	});

	//store all the age differences of mother and the child
	var ageDifferences = [];

	childlenWithMother.forEach(function(person){
		ageDifferences.push(person.born - byName[person.mother].born);
	});

	return Number(average(ageDifferences).toFixed(1));
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  // Your code here
  var map = new Map();

	// create a map of arrays
	// using century as index of the map
	// push ages to the array of its century array 
	ancestry.forEach(function(person) {
		var centuryIndex = [Math.ceil(person.died/100)];
		var age = person.died - person.born;

		if (!map[centuryIndex])
			map[centuryIndex] = [age];
		else
			map[centuryIndex].push(age);
	});

	for (var index in map) {
  		map[index] = Number(average(map[index]));
	}

	return map;

	
}



// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

