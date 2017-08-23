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
function reduce(array, combine, start){
  var current = start;
  for(var i = 0; i < array.length; i++){
    current = combine(current, array[i]);
  }
  return current;
}

function flatten(arrays) {
  return reduce(arrays, 
  	function flatten(arr1, arr2){
  		var arr = [];
  		return arr.concat(arr1, arr2);

	}, []); 
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function hasKnownMother(person){
  return byName[person.mother];
}

function ageDiff(person){
  return person.born - byName[person.mother].born;
}

function averageMomChildAgeDiff() {
  var differences = ancestry.filter(hasKnownMother);
  differences = differences.map(ageDiff);
  return average(differences);
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  var centuries = {};
  var century;
  ancestry.forEach(function(person){
    century = Math.ceil(person.died/100);
    if(!(century in centuries)){
      centuries[century] = [];
    }
    centuries[century].push(person.died - person.born);
  });

 for(var key in centuries){
    centuries[key] = average(centuries[key]);
  }
 
  return centuries;	
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

