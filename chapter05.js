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
ancestry.forEach(function (person) {
  byName[person.name] = person;
});


// Problem 1: Flattening
function flatten(arrays) {
  let arr = [];
  for (let n of arrays) {
    if (Array.isArray(n)) {
      arr = [...arr, ...(flatten(n))];
    } else {
      arr.push(n);
    }
  }
  return arr;
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  // Your code here
  let diffs = [];
  for (let p in byName) {
    let person = byName[p];
    let mom = byName[person.mother];
    if (mom == undefined) continue;
    diffs.push(person.born - mom.born);
  }
  return average(diffs);
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  let data = {};
  for (let name in byName) {
    let person = byName[name];
    let century = (parseInt(person.died.toString().substr(0, 2)) + 1).toString();
    data[century] = data[century] || [];
    data[century].push(person.died - person.born);
  }
  Object.keys(data).forEach( x => data[x] = average(data[x]));
  return data;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

