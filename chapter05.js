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
  return arrays.reduce(function(a,b){
  	return a.concat(b);
  }, []);
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  // Your code here
  return average(ancestry.filter(function(person){
  	return person.mother in byName;
  }).map(function(person){
  	return person.born - byName[person.mother].born;
  }));
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function getCentury(person){
	return Math.ceil(person.died / 100);
}

function groupBy(array, func){
	var groups = {};
	array.forEach(function(element){
		var name = func(element);
		if(name in groups)
			groups[name].push(element);
		else
			groups[name] = [element];
	});
	return groups;
}
function averageAgeByCentury() {
  // Your code here
  var centuryGrouped = groupBy(ancestry, getCentury);
  var averageAge = {};
  	for(var century in centuryGrouped){
  	var ages = centuryGrouped[century].map(function(person){
  		return person.died - person.born;
  	})
  	averageAge[century] = average(ages);
  }
  return averageAge;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

