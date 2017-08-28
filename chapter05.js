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
	var result=[];
	for(var i=0;i<=arrays.length-1;i++){
		result=result.concat(arrays[i]);
	}
	return result;
  // Your code here
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
var hasKnownMother=function(person){
	return person.mother in byName;
}
function momChildAgeDiff(){
	return person.born- byName[person.mother].born;
}
function averageMomChildAgeDiff() {
	return average(ancestry.filter(hasKnownMother).map(momChildAgeDiff));
  // Your code here
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function personsCentury(person) {
  return Math.ceil(person.died / 100);
}
function group(array){
	var sorted={};//sorted={title(16-20):Array[n],tile2(16-20):Array[m]}
	array.forEach(function(person){
		var title=personsCentury(person);
		if(title in sorted){
			sorted[title].push(person);

		}else{
			sorted[title]=[person];
		}
	})
	return sorted;
}
var sortedPeople=group(ancestry);
function averageAgeByCentury() {
	for(var century in sortedPeople){
		var age=sortedPeople[title].map(function(person){
			return person.died-person.born;


		});
		console.log(century+": "+average(age));
		
	}
  // Your code here
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

