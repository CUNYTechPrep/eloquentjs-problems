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
function concat(c,a){
	var result = c;
  	for (var i = 0; i < a.length; i++) {
    	result.push(a[i]);
    }
  	return result;
}
function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
}

function flatten(arrays) {
  // Your code here
  return reduce(arrays,concat,[])
}

// Problem 2: Mother-child age difference
function findmother(a) {
	var result =[];
  	var children =[];
  	var mother = [];
  	for (var c in a) {
    	for (var m in a) {
        	if (a[c].mother === m) {
            	children.push(a[c]);
              	mother.push(a[m]);
            }
        }
    }
  	result.push(mother);
  	result.push(children);
  	return result;
}
function age_mother_at_birth(m,c){
	var result = [];
  	for (var i = 0; i < m.length; i++) {
    	result.push(c[i].born - m[i].born);
    }
  	return result;
}
function addall(a) {
  	var sum = 0;
	for (var i in a) {
    	sum += a[i];
    }
  	return sum;
}
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
	var data = findmother(byName);
	var mother_age = age_mother_at_birth(data[0],data[1]);
 	return average(mother_age);
  // Your code here
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */

function findGeneration(p) {
    return String(Math.ceil(p.died/100));
}
function averageAgeByCentury() {
  // Your code here
  	var result = {};
  	for (var i in byName) {
    	var generation = findGeneration(byName[i])
        if (! (generation in result)) {
        	result[generation] = [];
        }
      	result[generation].push(byName[i].died - byName[i].born);
    }
    for (var i in result) {
    	result[i] = average(result[i]);
    }
 	return result;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

