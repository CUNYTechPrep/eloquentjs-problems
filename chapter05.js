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
function concat(a, b){
  var a_end = a.length;
  for(var i = 0; i < b.length; i++){
    a[a_end] = b[i];
    a_end++;
  }
  return a;
}

function flatten(arrays) {
  var b = arrays[0];
  for(var i = 1; i < arrays.length; i++){
    b = concat(b, arrays[i]);
  }
  return b;
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
	var tot_age_diff = 0;
	var sample_size = 0;
	ancestry.forEach(function(child){
	  for(var mom in byName){
	  	if(child.mother === byName[mom].name){
	      var mom_age = child.born - byName[mom].born;
	      tot_age_diff += mom_age;
	      sample_size++;
	      break;
	    }
	  }
	});
	var avg_age_diff = tot_age_diff/sample_size;
	return avg_age_diff;
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
	var centuries = {};
	ancestry.forEach(function(person){
	  var century = Math.ceil(person.died / 100);
	  var found = false;
	  for(var c in centuries){
	    if(c == century){
	      centuries[century].push(person.died-person.born);
	      found = true;
	      break;
	    }
	  }
	  if(!found){
	    centuries[century] = [];
	    centuries[century].push(person.died-person.born);
	  }
	});
	for(c in centuries){
		centuries[c] = average(centuries[c]);
	}
	return centuries;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

