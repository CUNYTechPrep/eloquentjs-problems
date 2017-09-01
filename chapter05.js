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
  var newArray = arrays.reduce((x, y) => {return x.concat(y);});
  return newArray;
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  // Your code here
  var ageDiffs = []
  for (person in byName) {
  	var child = byName[person];
  	if (child.mother) {
  		var mother = byName[child.mother];
  		if (mother) {
  			ageDiffs.push(child.born - mother.born);
  		}
  	}
  }

  return average(ageDiffs);
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  // Your code here
  var ageGroups = {};
  for (person in byName) {
  	var century = Math.ceil(byName[person].died / 100);
  	var personAge = byName[person].died - byName[person].born
  	if (ageGroups[century]) {
  		ageGroups[century].push(personAge);
  	} else {
  		ageGroups[century] = [personAge];
  	}
  }

  for (group in ageGroups) {
  	ageGroups[group] = average(ageGroups[group]);
  }

  return ageGroups;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

