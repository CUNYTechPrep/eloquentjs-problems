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
return (arrays.reduce(function(a, b) {
  return a.concat(b);
}));
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  var allAges = ancestry.map(function(person) {
    var mother = byName[person.mother];
    if(mother)
      return ageDifference(person, mother);
    else
      return null;
  });

  allAges = allAges.filter(function(person) {
    return person != null;
  });

  return average(allAges);
}

function ageDifference(person, mother) {
  return person.born - mother.born;
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  var centuries = {};
  ancestry.forEach(function(person) {
    var century = Math.ceil(person.died / 100);
    if(!centuries.hasOwnProperty(century)) {
      centuries[century] = []; 
    }
    centuries[century].push(person.died - person.born);
  });

  let results = {};
  for(var century in centuries) {
    results[century] = average(centuries[century]);
  }
  return results;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

