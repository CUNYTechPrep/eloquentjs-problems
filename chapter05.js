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
  }, [])
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  // Your code here
  var diff = ancestry.filter(function(person) {
  	return byName[person.mother] != null;
  }).map(function(person) {
  	return person.born - byName[person.mother].born;
  });
  return average(diff);
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  // Your code here
  var centuryAve = {};
  var centuryAveRes = {};
  ancestry.forEach(function(person) {
  	var cent = String(Math.ceil(person.died/100));
  	if (!(cent in centuryAve)) {
  		centuryAve[cent] = [person.died - person.born];
  	} else {
  		centuryAve[cent].push(person.died - person.born);
  	}
  });
  for (var i in centuryAve) {
  	var total = centuryAve[i].reduce(function(sum, val) {
  		return (sum + val);
  	}, 0);
  	if(!(i in centuryAveRes)) {
  		centuryAveRes[i] = Math.ceil(total / centuryAve[i].length * 1000.0) / 1000.0;
  	}
  }
  return centuryAveRes;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

