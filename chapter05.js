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
  return arrays.reduce(function(accu,ele){
    return accu.concat(ele)
  },[])
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  ageDiff = ancestry.reduce(function(all, person, index){
   if (person.mother in byName)
     all.push(person.born - byName[person.mother].born)
   return all;
  },[])
  return ageDiff.reduce(function(a, b) { return a + b; }) / ageDiff.length;
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  var cObj = {}
  ancestry.forEach(function(person){
    var century = Math.ceil(person.died/100);
    if (!(century in cObj))
      cObj[century] = [];
    cObj[century].push(person.died-person.born);
  });
  Object.keys(cObj).forEach(function(key){
    cObj[key] = cObj[key].reduce(function(a, b) { return a + b; }) /
      cObj[key].length;
  });
  return cObj;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };
