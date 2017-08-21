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
ancestry.forEach(person => byName[person.name] = person);

// Problem 1: Flattening
function flatten(arrays) {
  // Your code here
  return arrays.reduce((a, b) => {
  	 return a.concat(b);
  }, []);
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  // Your code here
  let childrenWithMom = ancestry.filter(child => {
  	return child.mother !== null && child.mother in byName;
  });

  let ageDifferences = childrenWithMom.map(child => {
  	return child.born - byName[child.mother].born;
  });

  return average(ageDifferences);
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  // Your code here
  let averageAge = new Object();

  ancestry.forEach(person => {
  	let yearsLived = person.died - person.born;
  	let property = Math.ceil(person.died / 100);

  	if(!averageAge.hasOwnProperty(property))
  		averageAge[property] = [];

  	averageAge[property].push(yearsLived);
  });


  for(century in averageAge){
  	averageAge[century] = average(averageAge[century]);
	}
 
  return averageAge;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

