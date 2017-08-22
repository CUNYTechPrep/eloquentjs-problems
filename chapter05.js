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

const haveMother = function(person) {
  return person.mother in byName;
};

// Problem 1: Flattening
function flatten(arrays) {
  // Your code here
  return arrays.reduce((acc, cur)=>acc.concat(cur), []);
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function ageDiff(person) {
  return person.born - byName[person.mother].born;
}
function averageMomChildAgeDiff() {
  return average(ancestry.filter(haveMother).map(ageDiff));
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
/* const personInfo = [];

ancestry.forEach(function(person) {
  const info = {};
  info["name"] = person.name;
  info["centuryOfDeath"] = Math.ceil(person.died/100);
  info["age"]= person.died - person.born;
  personInfo.push(info);
});

const centuries = {};
personInfo.forEach(function(person) {
  if(!centuries[person.centuryOfDeath]) {
    centuries[person.centuryOfDeath] = [];
  }

  centuries[person.centuryOfDeath].push(person.age);
});
*/
function averageAgeByCentury() {

  const personInfo = [];

  ancestry.forEach(function(person) {
    const info = {};
    info["name"] = person.name;
    info["centuryOfDeath"] = Math.ceil(person.died/100);
    info["age"]= person.died - person.born;
    personInfo.push(info);
  });

  const centuries = {};
  personInfo.forEach(function(person) {
    if(!centuries[person.centuryOfDeath]) {
      centuries[person.centuryOfDeath] = [];
    }

    centuries[person.centuryOfDeath].push(person.age);
  });

  for(key in centuries)
    console.log(key + ": " + average(centuries[key]));

}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };
