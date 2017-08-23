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
function concat(array1, array2){
  for(var i=0; i<array2.length; i++){
    array1[array1.length] = array2[i];
  }
  return array1;
}

function flatten(arrays) {
  return arrays.reduce(concat);
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  var diffs = [];
  for(var person in byName){
    if(byName.hasOwnProperty(byName[person].mother)){
      diffs[diffs.length] = byName[person].born - byName[byName[person].mother].born;
    }
  }
  return average(diffs);
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  var getCentury = function(year){return Math.ceil(year/100)}
  var retval = {};
  for(var person in byName){
    var century = getCentury(byName[person].died);
    var age = byName[person].died - byName[person].born;
    if(retval.hasOwnProperty(century)){
      retval[century][retval[century].length] = age;
    }else{
      retval[century] = [age];
    }
  }
  for(var century in retval){
    retval[century] = average(retval[century]);
  }
  return retval;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };
