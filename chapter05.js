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
var flatten = function(arrays) {
    return arrays.reduce(function (a,b){
        return a.concat(b);
    });
}


// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function filter(array, test) {
    var passed = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i]))
            passed.push(array[i]);
    }
    return passed;
}

var ageDiff = function(person) {
    return person.born - byName[person.mother].born;
};

function averageMomChildAgeDiff() {
    var diff = ancestry.filter(function(person) {
        return byName[person.mother] != null;
    });
    diff = diff.map(ageDiff);
    return average(diff);
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
var averageAgeByCentury = function() {
    var lifeExpByCentury = {};
    ancestry.forEach(function(person) {
        var century = Math.ceil(person.died / 100);

        if (!(century in lifeExpByCentury)) {
            lifeExpByCentury[century] = [];
        }

        lifeExpByCentury[century].push(person.died - person.born);
    });

    for (var century in lifeExpByCentury) {
        lifeExpByCentury[century] = average(lifeExpByCentury[century]);
    }

    return lifeExpByCentury;
};


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

