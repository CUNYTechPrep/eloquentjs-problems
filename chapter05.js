x/*
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
  console.log(arrays.reduce(function(flat, current) {
    return flat.concat(current);
  }, []));
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  // Only get values for mother
  var array = ancestry.filter(function(person) {
    return byName[person.mother] != null;
  // Get the birth date of the current array value
  // Subtract that value from the birthdate of the mother from byName
  }).map(function(person) {
    return person.born - byName[person.mother].born;
  });
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  var centuries = {};
  // Map through values of an array 'a'
  a.map(function (person) {

    // Century of death
    var century = Math.ceil(person.died / 100);
    // Age when died
    var age = person.died - person.born;
    // Check if century value doesn't exist yet
    if (!(century in centuries)) {
      // Insert the century, make it an array of the age
      centuries[century] = [age];
    } else {
      // Otherwise, add the current age
      centuries[century].push(age);
    }
  });
  
  for (var key in centuries) {
    console.log(key + ': ' + average(centuries[key]).toFixed(3));
  }
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

