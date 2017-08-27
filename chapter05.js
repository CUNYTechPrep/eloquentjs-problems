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
  return(arrays.reduce(function(previous, current) {
    return previous.concat(current);
  }, []));
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  // Your code here
  var byName = {};
  ancestry.forEach(function(person) {
    byName[person.name] = person;
  });
  // Define a hasKnownMother function and filter it
  var hasKnownMother = ancestry.filter(function(person) {
    return byName[person.mother] != null;
  });
  // Compute AgeDifferences
  var ageDifference = hasKnownMother.map(function(person) {
    return person.born - byName[person.mother].born;
  });

  return (average(ageDifference));
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  // Your code here
  var centuries = {};
  ancestry.forEach(function(person) {
    var centuryIndex = Math.ceil(person.died / 100);

    if (!(centuryIndex in centuries)) {
      centuries[centuryIndex] = [];
    }
    centuries[centuryIndex].push(person.died - person.born);
  });

  for (var centuryIndex in centuries) {
    centuries[centuryIndex] = Number(average(centuries[centuryIndex]));
  }

  return centuries;  
}
  
// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

