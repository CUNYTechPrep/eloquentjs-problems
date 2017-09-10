/*
 * Add your solutions to the chapter 5 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */
const ancestry = require('./ancestry');

// The following are helper functions for Problem 3: Historical Life Expectancy
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function century (person){
  return Math.ceil(person.died / 100);
}

function age (person){
  return person.died - person.born;
}

function groupBy(arr){
  accumulator = {};
  arr.forEach(person => {
    if (century(person) in accumulator){
      	(accumulator[century(person)]).push(person);
  	}
  	else {
    	accumulator[century(person)] = [person];
  	}
  });
  return accumulator;
}

// The following is a helper function for Problem 2: Mother-child age difference
const byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});


// Problem 1: Flattening
function flatten(arrays) {
  return arrays.reduce(function(a, b){
    return a.concat(b);
  })
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  result = [];
  ancestry.forEach(person => {
    if(person.mother in byName){
      result.push(person.born - byName[person.mother]['born']);
    }
  });
  return average(result);
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  result = groupBy(ancestry);
  output = {};
  for (let group in result){
    output[group] = (average(result[group].map(age)));
  }
  return output;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

