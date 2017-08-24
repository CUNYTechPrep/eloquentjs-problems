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
  console.log(arrays.reduce(function(previous, current) {
    return previous.concat(current);
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
  // Define a hasKnownMother function and filter it
  var hasKnownMother = ancestry.filter(function(person) {
    return byName[person.mother] != null;
  });
  // Compute AgeDifferences
  var ageDifference = hasKnownMother.map(function(person) {
    return person.born - byName[person.mother].born;
  });

  return (averageMomChildAgeDiff(ageDifference));
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  // Your code here
  ancestry.forEach(function(person){
    // A person is assigned to a century by taking their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).
    var century = Math.ceil(person.died / 100);

    if (century in centuries) {
      centuries[century].push(person.died - person.born);
    } else {
      centuries[century] = [person.died - person.born];
    }
  }); 

  // For in loop to print the average ages for the individuals centuries
  for (var key in centuries) {
    centuries[key] = averageAgeByCentury(centuries[key]);

    return {name: Math.ceil(person.died/100),
          value: person.died - person.born};
  }
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

