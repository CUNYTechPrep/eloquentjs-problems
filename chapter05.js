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
  var output_array = arrays.reduce(function(a,b){
  return a.concat(b);
})
  return output_array;
};

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  // Your code here
  var has_mothers = ancestry.filter(function(person){
  return byName[person.mother] != null;})

	var mothers_ages = has_mothers.map(function(person){
	  return person.born - byName[person.mother].born;})
	//console.log(mothers_ages);

	var average_age = average(mothers_ages);

	return average_age;
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
// Your code here.
function groupBy(array, groupFunction){
  var  groupSets = {};
  array.forEach(function(person){
    var groupID = groupFunction(person);
    if (groupID in groupSets)
    {
      groupSets[groupID].push(person);
    }
    else
    {
      groupSets[groupID] = [person];
    }
  })
  return groupSets;    
}


function averageAgeByCentury() {
  // Your code here
  var century_groups = groupBy(ancestry, function(person){
  return Math.ceil(person.died / 100);
});
  var avg_age_by_century = {}

for (var century in century_groups){
  var ages = century_groups[century].map(function(person){
    return person.died - person.born;
  });
  //console.log(century + ": " +average(ages));
  avg_age_by_century[century] = average(ages);

}
  return avg_age_by_century;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

