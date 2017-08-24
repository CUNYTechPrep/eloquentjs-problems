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
    return arrays.reduce(function(a,b) {
        return a.concat(b);
    });
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
    var difference = ancestry.filter(function(person) {
        return byName[person.mother] != null;
    }).map(function(person) {
      return person.born - byName[person.mother].born;
    });

    return average(difference);
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
    //assign each person to a century
    var avgAgeExpectancy = {};
    var century;

    ancestry.forEach(function(person) {
      century = Math.ceil(person.died / 100).toString();
      if(!avgAgeExpectancy.hasOwnProperty(century)) { avgAgeExpectancy[century] = []; }
      avgAgeExpectancy[century].push(person.died - person.born);
    });

    for (var cent in avgAgeExpectancy) {
        avgAgeExpectancy[cent] = average(avgAgeExpectancy[cent]);
    }

    return avgAgeExpectancy;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

