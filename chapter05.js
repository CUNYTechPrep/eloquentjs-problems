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
  return arrays.reduce( (a, b) => {return a.concat(b); }, []); 
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */

function averageMomChildAgeDiff() {
  let ageDifferences = [];
  let filteredAncestry = ancestry.filter( (person) => {return byName[person.mother] != null ? true : false;} );
  filteredAncestry.forEach( (person) => {
    let birth = person.born;
    let motherDOB = byName[person.mother].born;
    let ageDiff = birth - motherDOB;
    ageDifferences.push(ageDiff); 
  });
  return average(ageDifferences);
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  averageAges = {};
  ancestry.forEach((person) => {
    let century = Math.ceil(person.died / 100);
    let age = person.died - person.born;
    if (!averageAges.hasOwnProperty(century)) {
      averageAges[century] = [age];
    } else {
      averageAges[century].push(age);
    }
  });
  Object.keys(averageAges).forEach( (century) => { averageAges[century] = average(averageAges[century]); } )
  return averageAges;
}





// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

