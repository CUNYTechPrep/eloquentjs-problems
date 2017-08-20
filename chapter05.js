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



function personsByCentury(array) {
  let personGroups = {};
  array.forEach(person => {
    let century = Math.ceil(person.died / 100);
    if (century in personGroups)
      personGroups[century].push(person);
    else
      personGroups[century] = [person];
  });
  return personGroups;    
}



// Problem 1: Flattening
function flatten(arrays) {
  return arrays.reduce((a, b) => a.concat(b));
}


// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  let isMotherKnown = ancestry.filter(person => byName[person.mother] != null);
  let motherAge = isMotherKnown.map(person => person.born - byName[person.mother].born);
  return average(motherAge);
}


// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
*/
function averageAgeByCentury() {
  let averages = {};
  let persons = personsByCentury(ancestry);

  for (let century in persons) {
	  let ages = persons[century].map(person => person.died - person.born);
	  averages[century] = average(ages);
  }
  return averages;
}

// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

