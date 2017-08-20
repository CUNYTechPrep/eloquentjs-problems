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
	return reduce(arrays, function(a, b) {
		var newArray = [];
		newArray = a.concat(b);
		return newArray;
	}, 0);
}

function reduce(array, combine, start) {
  var current = [];
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
}
// var arrays = [[1, 2, 3], [4, 5], [6]];

// console.log(flatten(arrays));

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  	var arrayOfAgeDiff = [];

	for(var key in ancestry){
		for(var key2 in ancestry){
			if(ancestry[key].mother === ancestry[key2].name){
				arrayOfAgeDiff.push(ancestry[key].born - ancestry[key2].born);
			}
		}		
	}
	return average(arrayOfAgeDiff);
}

// console.log(averageMomChildAgeDiff());

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
 	var age = {
 	};
 	for(var i = 16; i <= 21; i++){
 		var ageByCenturyArray = [];
 		for(var key in ancestry){
 			var temp = Math.ceil(ancestry[key].died / 100);
 			if(i === temp){
 				ageByCenturyArray.push(ancestry[key].died - ancestry[key].born);
 			}
 		}
 		var j = i.toString();
 		age[j] = average(ageByCenturyArray);
 	} 
 	return age;
}

// console.log(averageAgeByCentury());


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

