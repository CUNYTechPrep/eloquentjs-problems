/*
 * Add your solutions to the chapter 5 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */
const ancestry = require('./ancestry');

function average(array) {
    function plus(a, b) {
        return a + b;
    }
    return array.reduce(plus) / array.length;
}

const byName = {};
ancestry.forEach(function(person) {
    byName[person.name] = person;
});


// Problem 1: Flattening
function flatten(arrays) {
    // Your code here
    let b = arrays.reduce((x, y) => {
        return x.concat(y);
    });
    return b;
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
    var byName = {};
    ancestry.forEach(function(person) {
        byName[person.name] = person;
    });

    let mom = ancestry.map((person) => {
        if (byName[person.mother] != null) {
            return (person.born - byName[person.mother].born);
        }
    })
    mom = mom.filter(age => age != undefined);
    let av = average(mom);
    return av;
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
    // Your code here
    let byCentury = {}
    ancestry.forEach((person) => {
        let cent = Math.ceil(person.died / 100)
        let age = person.died - person.born;
        if (byCentury.hasOwnProperty(cent)) {
            byCentury[cent].push(age);
        } else {
            byCentury[cent] = [];
            byCentury[cent].push(age);
        }
    })

    for (let century in byCentury) {


        let av = average(byCentury[century]);

        byCentury[century] = av;

    }
    return byCentury
}


// Do not modify below here.
module.exports = {
    flatten,
    averageMomChildAgeDiff,
    averageAgeByCentury
};
