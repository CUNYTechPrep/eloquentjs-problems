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
function flatten(arr) {
var newArr = arr[0];
  arr.reduce(function(prev, curr, index, arr){
    newArr = newArr.concat(curr);
  });
  return newArr;
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.
function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
  return mapped;
}

var hasMother = ancestry.filter(function(person) {
   if(byName[person.mother] !== null)
     return byName[person.mother];
}); 

return average(map(hasMother, function(person) {
  return person.born - byName[person.mother].born;
}));
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {

  function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var perCentury = {};
for(var k in ancestry) {
  var person = ancestry[k];
  var centuryBorn = String(Math.ceil(person.died/100));
  if(! (centuryBorn in perCentury)) {
    perCentury[centuryBorn] = [];
  }
  perCentury[centuryBorn].push(person.died - person.born);
  
 }
  for(var k in perCentury)
    perCentury[k] = average(perCentury[k]);
  return perCentury;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

