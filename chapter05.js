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
  return arrays.reduce((a,b) => a.concat(b));
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
 function hasKnownMother(person){
   return person.mother in byName;
 }

 var byName = {};
 ancestry.forEach(function(person) {
   byName[person.name] = person;
 });

 function getAgeDifference(person){
   return person.born - byName[person.mother].born;
 }

 function average(array) {
   function plus(a, b) { return a + b; }
   return array.reduce(plus) / array.length;
 }

 average(byname);
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  var avgYears = {};
  ancestry.forEach(function(person){
   century = Math.ceil(person.died/100);
   if(!(century in avgYears)){
     avgYears[century] = [];
   }
   avgYears[century].push(person.died - person.born);
 });
 function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
 }
 return average(avgYears);
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };
