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

/*
const byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});
*/


// Problem 1: Flattening
// Precondition: arr is a javascript array. It may be empty. It's
// elements may be any valid javascript object.
// Postcondition: Returns a flattened list of the elements in `arr`, and
// all of the elements that are in elements of `arr`.
function flatten(arr) {
	if (arr.length === 0) {
		return [];
	} else if (typeof arr[0] === 'number' ||
			typeof arr[0] === 'string' ||
			(typeof arr[0] === 'object' &&
				Object.getPrototypeOf(arr[0]) !== Array.prototype)) {
		return [arr[0]].concat(flatten(arr.slice(1)));
	} else {
		return [].concat(
			flatten(arr[0]),
			flatten(arr.slice(1)))
	}
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */

// Postconditions: If there is an entry in list such that
// entry[property] === value, then return the first such entry in list
// for which that is true. Otherwise, return null.
function byProperty(list, property, value) {
	for (let i = 0; i < list.length; i++) {
		if (list[i][property] === value)
			return list[i]
	}
	return null;
}

var byName = byProperty.bind(null, ancestry, 'name');

function averageMomChildAgeDiff() {
	var pairs = ancestry.map(person => [person, 
																			byName(person['mother'])]);
	var validPairs = pairs.filter(
		pair => pair[0] != null && pair[1] != null);
	var differences = validPairs.map(
		pair => pair[0]['born'] - pair[1]['born']);
	return average(differences);
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
	var yearToCentury = year => Math.ceil(year / 100);
	var personAge = person => person['died'] - person['born'];
	var centuryMap = ancestry.reduce(function (centMap, person) {
		var century = yearToCentury(person['died']);
		var age = personAge(person);
		if (centMap[century] === undefined) {
			centMap[century] = [age];
		} else {
			centMap[century].push(age);
		}
		return centMap;
	}, {});

	var avgMap = {}
	for (let century in centuryMap) {
		let avg = average(centuryMap[century]);
		avgMap[century] = avg;
	}
	return avgMap;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };
