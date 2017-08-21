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
  function reduce(arrays, combine, start){
  	let current = start;
  	for (var i = arrays.length - 1; i >= 0; i--) {
  		current = combine(current, arrays[i]);
  	}
  	return current;
 }
 let arr = reduce(arrays, function(a,b){
 	return b.concat(a);
 }, []);

 return arr;
	
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  // Your code here
  function map(array, transform){
  	let mapped = [];
  	for (var i = 0; i < array.length; i++)
  		mapped.push(transform(array[i]));
  	return mapped;
  }

  let ageDifference = map(ancestry, function(person){
  	if(byName[person.mother] != null)
  		return person.born - byName[person.mother].born;
  	else{
  		return null;
  	}
  });

  let removeNull = ageDifference.filter(function(person){
  	return person != null;
  });

  let averageAge = parseFloat((average(removeNull)).toFixed(1));

  return averageAge;
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  // Your code here
  var byCentury = {};
  ancestry.forEach(function(person) {
  	let cent  = Math.ceil(person.died/100);
  	let age = person.died - person.born;
  	if(typeof byCentury[cent] === 'undefined'){
  		byCentury[cent] = [age];
  	}
  	else{
  		byCentury[cent].push(age);
  	}
  });

  for(var prop in byCentury){
  	byCentury[prop] = parseFloat(average(byCentury[prop]));
  }

  return byCentury;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

