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
  return arrays.reduce(function(a, b) {
  	return a.concat(b);
  }, []);
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  // Your code here
  var count = sumAges = 0;
  for(person in byName) {
  	ancestry.forEach(function(bio) {
  		if(person == bio.mother) {
  			count++;
  			sumAges += bio.born - byName[person].born;
  		}
  	});
  }
  return sumAges / count;
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  // Your code here
  function assignCentury(person) {
  	return Math.ceil(person.died / 100);
  }

// Each inner array represents a century
  var avgAge = {16: [], 17: [], 18: [], 19: [], 20: [], 21: []};
  ancestry.forEach(function(person) {
  	avgAge[assignCentury(person)].push(person.died - person.born);
  });

  for(century in avgAge) {
  	avgAge[century] = average(avgAge[century]);
  }
  return avgAge;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

