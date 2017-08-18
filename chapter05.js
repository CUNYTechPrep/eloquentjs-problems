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
	arrays = arrays.reduce(function(cur, next) {
		return cur.concat(next);
	});

	return arrays
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
	var count = 0;
	var ages;

	ages = ancestry.filter(function(person) {
		if (person.mother != null && person.mother in byName)
		{
			return true;
		}
		return false;
	}).map(function(person) {
		return person.born - byName[person.mother].born;
	});

	return average(ages);
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
    	*/
    function averageAgeByCentury() {
    	var centuries = [];

    	ancestorAgesByDeathCentury = {};

    	ancestry.forEach(function(person) {
    		if(centuries.indexOf(Math.ceil(person.died / 100)) === -1){
    			centuries.push(Math.ceil(person.died / 100));
    			ancestorAgesByDeathCentury[Math.ceil(person.died / 100)] = [];
    		}
    	});

    	centuries.sort()

    	centuries.forEach(function(century) {
    		ancestorAgesByDeathCentury[century] = average(ancestry.filter(function(person) {
    			if (Math.ceil(person.died / 100) == century)
    			{
    				return true;
    			}
    			return false;
    		}).map(function(person) {
    			return person.died - person.born;
    		}));
    	});

    	return ancestorAgesByDeathCentury;

    }


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

