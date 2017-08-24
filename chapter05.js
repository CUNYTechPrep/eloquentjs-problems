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
function flatten(array) {
  // Your code here
  var current = [];

    for (var i = 0; i < array.length; i++)
        current = combine(current, array[i]);
    }

    function combine(a, b) {
        return a.concat(b);
    };

    return current;
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  // Your code here
    var mCount = 0;
    var mTotal = 0;

    for(let key in byName){
        if(byName[key].mother !== null){
            cDob = byName[key].born;
            let mother = byName[key].mother;

            if(byName[mother]){
                mDob = byName[mother].born;

                let diff = cDob - mDob;

                mCount++;

                mTotal += diff;

            }
        }
    }
    mTotal = mTotal/mCount;
    return mTotal;
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  // Your code here
    var centCount = [];
    var centAge = [];

    for(let i=0; i<ancestry.length; i++){

        let cent = Math.ceil(ancestry[i].died/100);

        if(isNaN(centCount[cent])) centCount[cent] = 0;
        if(isNaN(centAge[cent])) centAge[cent] = 0;

        centCount[cent]++;
        centAge[cent] += ancestry[i].died - ancestry[i].born;
    }
    for(let i=16; i<21; i++){
        centAge[i] = centAge[i]/centCount[i];
    }
    
    var centMap = {
        '16' : centAge[16],
        '17' : centAge[17],
        '18' : centAge[18],
        '19' : centAge[19],
        '20' : centAge[20],
        '21' : centAge[21]
    };

    return centMap;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

