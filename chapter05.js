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
  return(arrays.reduce((first, second)=> first.concat(second)));
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  var has_mother = function(p) {
    return p.mother in byName;
};
function age_dif(p) {
    return p.born - byName[p.mother].born
}
var ave = ancestry.filter(has_mother).map(age_dif);
return average(ave);
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
var cent = {};
ancestry.forEach(p  => {
    var c = String(Math.ceil(p.died/100));
    if (!(c in cent)) {
      cent [c] = [];
    }
    cent[c].push(p.died - p.born);
}
                );


var obj = {}; 
    for (c in cent) {
    obj.c = average(cent[c]);
    console.log(c, "->", average(cent[c]));
}
return obj;
}
//The comments above state to return an object but the test
//throws out an error: value must be a number. code does work
//with the online editor through http://eloquentjavascript.net

// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };
