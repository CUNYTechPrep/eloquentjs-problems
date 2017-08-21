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
  return (arrays.reduce(function(a, b) {
	return a.concat(b);
  }));
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
	// Your code here
	var byName = {};
	ancestry.forEach(function(person) {
	  byName[person.name] = person;
	});


	// Getting all the mothers' names – not all of them are valid
	// We cannot tell what is the age of the mother when she gave birth unless we have data of them being a child and a mother
	var all_mothers = ancestry.map(function(person) {
		return person.mother;
	});

	// Getting records of dates when mothers were born – all of them are valid 
	var records_born = {};
	for (var person in byName) {
		if (all_mothers.includes(byName[person].name)) {
			records_born[byName[person].name] = byName[person];
		}
	}
	// Getting records of dates when mothers gave birth
	var records_birth = {};
	for (var person in byName) {
		if (byName[person].mother in records_born) {
			records_birth[byName[person].name] = byName[person];
		}
	}

	// For each child, get difference in age and store in array
	var diff = [];
	for (var child in records_birth) {
		diff.push(records_birth[child].born - records_born[records_birth[child].mother].born);
	}

	return Math.round(average(diff) * 10) / 10;
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  	// Your code here
	var byCentury = {};
	// Creating smaller groups(derived arrays)
	ancestry.forEach(function(person) {
		var century = Math.ceil(person.died / 100);
		if ((century in byCentury) === false) {
			byCentury[century] = [];
		}
		byCentury[century].push(person.died - person.born);
	});

	function average(array) {
	  function plus(a, b) { return a + b; }
	  return array.reduce(plus) / array.length;
	}

	for (var century in byCentury) {
		byCentury[century] = average(byCentury[century]);
	}

	return byCentury;
	// -------------------
	// FOR BONUS POINTS...
	// function groupBy(array, action) {
	// 	var groups = {};
	// 	var length = array.length;
	// 	// Creating smaller groups(derived arrays)
	// 	for (var i = 0; i < length; ++i) {
	// 		var category = action(array[i]);
	// 		if ((category in groups) === false) groups[category] = [];
	//     groups[category].push(array[i]);
	// 	}
	// 	return groups;
	// }

	// var death = ancestry.map(function(person) {
	// 	return person.died;
	// });

	// return (groupBy(death, function(item){  // grouping by century of death
	// 	return Math.ceil(item / 100);
	// }));
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

