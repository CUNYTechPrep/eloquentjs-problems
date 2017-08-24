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
    flat = function (a,b){
        return a.concat(b);
    }
    return arrays.reduce(flat);
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
    var hasMom = ancestry.filter(function (person){
        return byName[person.mother] != null;
    }).map(function(person){
        return person.born - byName[person.mother].born;
    })
    return average(hasMom);
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
    var avg = {};
    ancestry.forEach(function (person){
        var current = Math.ceil(person.died / 100);
        if(avg[current] == undefined){
            avg[current] = [person.died - person.born];
        }else{
            avg[current].push(person.died - person.born);
        }
    });
    for(var century in avg){
        avg[century] = average(avg[century]);
    };
    return avg;
}

// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };
