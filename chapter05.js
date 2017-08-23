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

const haveMother = function(person) {
  return person.mother in byName;
};

// Problem 1: Flattening
function flatten(arrays) {
  // Your code here
  return arrays.reduce((acc, cur)=>acc.concat(cur), []);
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function ageDiff(person) {
  return person.born - byName[person.mother].born;
}
function averageMomChildAgeDiff() {
  return average(ancestry.filter(haveMother).map(ageDiff));
}

// Problem 3: Historical life expectancy

function averageAgeByCentury() {
//Life has been rather chaotic lately. Will try this again later. 

}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };
