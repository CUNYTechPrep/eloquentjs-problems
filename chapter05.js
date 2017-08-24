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
  var array = [];
  array = arrays.reduce(function(prev,cur) {
      return prev.concat(cur);
              });
 return array;
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  var ageDif = function (person) {
	return person.born - byName[person.mother].born;
}

var KnownMothers = ancestry.filter(function(person) {
  return byName[person.mother];
}).map(ageDif);

return (average(KnownMothers));
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
    var CentResults = {};
    ancestry.forEach(function (person) {
        var Century = Math.ceil(person.died / 100);
        if (!(Century in CentResults)) {
            CentResults[Century] = [person.died - person.born];
        } else {
            CentResults[Century].push(person.died - person.born);
        }
    });
   for (var i in CentResults) {
        CentResults[i] = average(CentResults[i]);
     };
   return CentResults;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

