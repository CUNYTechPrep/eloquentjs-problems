/*
 * Add your solutions to the chapter 5 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */
const ancestry = require('./ancestry');
var _ = require("lodash");



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
  var reduced = _.reduce(arrays,function(concated_sofar,row){ 
	/*concated_sofar is the running total of concatenations of arrays and row represents each array in this array of arrays */
	/* the 1st value of concatenated_sofar is the 1st element in arrays and row is each element of arrays*/
	return concated_sofar.concat(row);
	})
  return reduced;
}



// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
	var ancestry_array = JSON.parse(ancestry);

	var age_differences = _.map(ancestry_array,function(entry){
	  for (var i = ancestry_array.length - 1; i >= 0; i--) {
	    if(ancestry_array[i].name === entry.mother){
	      return entry.born - ancestry_array[i].born
	    }
	  }
	});

	var null_filter = _.filter(age_differences,function(entry){
	  if(entry != null){
	    return true;
	  }
	  else{
	    return false;
	  }
	});

	var final_avg = average(null_filter);
	return final_avg;
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */

function averageAgeByCentury() {
	var ancestry_array = JSON.parse(ancestry);

	var deaths_centuries = _.map(ancestry_array,function(entry){
	  var new_obj = {}
	  new_obj["age_at_death"] = entry.died - entry.born;
	  new_obj["century"] = Math.ceil(entry.died/100); //rounds up using ceiling
	  return new_obj;
	});

	var avgs = [];
	var output_object = {};
	for(var i=16; i<22; i++){
	  var ith_filter = _.filter(deaths_centuries,function(entry){
	    if(entry["century"]===i){
	      return true;
	    }
	  });

	  var ith_map = _.map(ith_filter,function(entry){
	    return entry.age_at_death;
	  });

	  var avg = average(ith_map);
	  avgs.push(avg);
	  output_object[i]=avg;
	}
	return output_object;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

