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
function flatten(arrays) 
{
	return arrays.reduce((left, right) => left.concat(right))
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() 
{
	let momExist = ancestry.filter(person => byName[person.mother] != null)
	let momAge = momExist.map(person => (person.born - byName[person.mother].born))
	return average(momAge)
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() 
{
	let cent = []
	let avg = []
	let c = 0

	for (let i in ancestry)
	{
		c = Math.ceil(ancestry[i].died / 100)
		if(cent.hasOwnProperty(c) == false) 
		{
			cent[c] = []
		}
		cent[c].push(ancestry[i].died - ancestry[i].born)
   }

   for(let i in cent)
   {
   		avg[i] = average(cent[i])
   }

   return avg
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

