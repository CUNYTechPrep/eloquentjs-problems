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
function flatten(arrays) {
  // Your code here
  arrays.reduce(function(flat, current) {
  	return flat.concat(current);
	});
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  // Your code here
  	var hasMother = ancestry.filter(function(person){
  	return person.mother !== null && person.mother in byName;
	});
	var ageDiff = hasMother.map(function(person){
  	return person.born - byName[person.mother].born;
	});
	return(average(ageDiff));
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  // Your code here
  	var averageAge = {};
  	ancestry.forEach(function(person){
  	var age = person.died - person.born;
  	var century = Math.ceil(person.died / 100);
    if(averageAge.hasOwnProperty(century) === false) averageAge[century] = [];
  	averageAge[century].push(age);
	});
	for(var i in averageAge){
  	averageAge[i] = average(averageAge[i]);
	}
	return averageAge;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

