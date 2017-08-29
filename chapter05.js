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
  return arrays.reduce(function(accumulator, currentValue)
    {
      if(currentValue.constructor !== Array)
        return accumulator.concat(currentValue);
      else
        return accumulator.concat(flatten(currentValue));
    },[]
  );
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  let ageDifferences = [];

  ancestry.forEach(function (person) {
    let mother = ancestry.find( x => x.name === person.mother );
    if(mother !== undefined)
      ageDifferences.push(person.born - mother.born);
  })

  return ageDifferences.reduce( (sum, element) => sum + element) / ageDifferences.length;
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {

  let ageListByCentury = [ [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[] ];

  ancestry.forEach(function (person) {
    var century = Math.ceil(person.died / 100);
    var ageDied = person.died - person.born;
    ageListByCentury[century].push(ageDied);
  })

  ageListByCentury.forEach( function (currentValue, index, array) {
    let avg = ageListByCentury[index].reduce( (sum, element) => sum + element, 0) / ageListByCentury[index].length;
    ageListByCentury[index] = avg;
  })

  return ageListByCentury;

}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };
