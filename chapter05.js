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
  return reduce(arrays, function(a, b){
  return a.concat(b);
}, 0);
}

function reduce(array, combine, start) {
  var current = [];
  for (var i = start; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  // Your code here
  return average(map(hasKnownMother, 
  	function(person){
  		return person.born - byName[person.mother].born;
  	}));
}

var hasKnownMother= ancestry.filter(function(person){
  if (byName[person.mother]){ return person; } 
});

function map(array, transform){
  var diff = [];
  for(var i= 0; i < array.length; i++){
    diff.push(transform(array[i]));
  }
  return diff;
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  // Your code here
  return setAverage(findCentury(ancestry));
}

function findCentury(array){
  var listByCentury = {};
  for(var i = 0; i < array.length; i++){
    var century = getCentury(array[i]);
    if(!listByCentury[century]){
      listByCentury[century] = [];
    }
    listByCentury[century].push(array[i].died - array[i].born);
  }
  return listByCentury;
}

function getCentury(person){
  return Math.floor(person.died/100 + 1);
}

function setAverage(cObject){
  var keys = Object.keys(cObject);
  var averageObj = {};
  for(var i = 0; i < keys.length; i++){
    averageObj[keys[i]] = Math.ceil(average(cObject[keys[i]])*100)/100;
  }
  return averageObj;
}
// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

