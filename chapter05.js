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
  var newArray = arrays.reduce(function(a,b) {
    return a.concat(b);
  });
  return newArray;
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  // Your code here
  var ancestry = JSON.parse(ancestry);
  
  var hasKnownMother =  ancestry.filter(function(person) {
    return byName[person.mother] != null 
  });

  return average(hasKnownMother.map(age));
}

function age(person) {
  return person.born - byName[person.mother].born;
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  // Your code here
  var ageGroup = {};
  ancestry.forEach(function(person) {
      var century = Math.ceil(person.died / 100);
      if (!(century in ageGroup)) {
          ageGroup[century] = [];
      }
      ageGroup[century].push(person.died - person.born);
  });

  for (var century in ageGroup) {
    ageGroup[century] = average(ageGroup[century]);
  }

  return ageGroup;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

