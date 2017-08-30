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
	return (arrays.reduce(
		function(x, y) {
			return x.concat(y);
		}
	));

}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  // Your code here
    return average(
    	ancestry.map(
    		function(person) 
  			{
  				if (byName[person.mother] != null)
  					return person.born - byName[person.mother].born;
  				else 
  					return null;
  			}
  		).filter(
  			function(person)
  			{
  				return person != null;
  			}
  		)
  	);
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
	// Your code here
  	var map = {};
  	ancestry.forEach(
  		function(person)
  		{
  			var centuries = Math.ceil(person.died / 100);
  			if (!map[centuries])
  			{
  				map[centuries] = [];
  				map[centuries].push(person.died - person.born);
  			}
  			else
  			{
  				map[centuries].push(person.died - person.born);
  			}
  		}
  	);
  	
  	var returnMap = {};
  	Object.keys(map).forEach(
  		function(a) {
  			returnMap[a] = average(map[a]);
  		}
  	);

  	return returnMap;

}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

