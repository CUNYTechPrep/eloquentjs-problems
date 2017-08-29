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
ancestry.forEach(person => {
  byName[person.name] = person;
});




// Problem 1: Flattening
function flatten(arrays) {
 	return  arrays.reduce(
 		function(flat, current)
 		{
		return flat.concat(current)
		}, []);

  	
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {



var differences = ancestry.filter(
	function(person){
		return byName[person.mother] !=null;	
	}).map(function(person){
	return person.born - byName[person.mother].born;
});

return average(differences);

}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {

	var group = {};

  function groupBy(array, groupOf){
  	var groups = {};
  	array.forEach(element =>{
  		var groupName = groupOf(element);
  		if(groupName in groups)
  			groups[groupName].push(element);
  		else
  			groups[groupName] = [element];
  	})
  	return groups;
  }

  var byCentury = groupBy(ancestry, function(person){
  	return Math.ceil(person.died/100);
  });

  for(var century in byCentury){
  	var ages = byCentury[century].map(function(person){
  		return person.died - person.born;
  	});	
  	group[century] = average(ages);
  }

  return group;
}



// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

