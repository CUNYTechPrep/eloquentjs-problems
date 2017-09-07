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
ancestry.forEach((person) => {
	byName[person.name] = person;
});


// Problem 1: Flattening
function flatten(array) {
	return array.reduce((flat_arr, curr_arr) => {
		return flat_arr.concat(curr_arr);
  }, [])
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
	let differences = ancestry.filter((person) => {
		return byName[person.mother] != null;   //filter those who only have mothers in data
	}).map((person) => {
		return person.born - byName[person.mother].born;
	});
	return average(differences);
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  let centuryAges = {};
  ancestry.forEach((person) => {
	  let century = Math.ceil(person.died / 100);
	  if (!(centuryAges.hasOwnProperty(century))) {
		centuryAges[century] = [];
	  }
	  centuryAges[century].push(person.died-person.born);
  });
  for (century in centuryAges) {
	  centuryAges[century] = average(centuryAges[century]);
  }
  return centuryAges;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

