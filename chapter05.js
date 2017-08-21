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
	arrays = arrays.reduce( (array, arrays) => {
    	return array.concat(arrays);
	});
	return arrays;
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
	var byName = {};
	ancestry.forEach(function(person) {
        byName[person.name] = person;
	});
	function hasMotherKnown(p){ 
    	return (typeof byName[p.mother] != "undefined" || byName[p.mother] != null) 
	}
	function age(p){
        var mother = byName[p.mother];
        return (p.born) - mother.born;

	}
	return average(ancestry.filter(hasMotherKnown).map(age));
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
	function ageCent(person) {
    	return Math.ceil(person.died /100);
	}
	function getAge(person) {
    	return person.died - person.born;
	}
	function groupBy(data, func1,func2) {
    	let ages = {};
    	data.map( (person) => {
        	let century = func1(person);
        	let age = func2(person)
        	if(!(century in ages)) {
            	ages[century] = [age];
        	}else{
            	ages[century].push(age);
        	}
    	});
    	return ages;
	}
	var ages =groupBy(ancestry,ageCent,getAge);
	var century = {};
	for(let i in ages) {
    	century[i]=average(ages[i]);
	}
	return century;
}

// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

