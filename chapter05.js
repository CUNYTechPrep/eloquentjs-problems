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
  var result = arrays.reduce(function(a, b) {
    return a.concat(b);
  });
  
  return result;
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  var ageDifferences = [];
  
  // ignore the mothers that are null, or don't exist in our ancestry database
  var filteredAncestry = ancestry.filter(hasKnownMother);
  
  // for every person in our ancestry array
  filteredAncestry.forEach(function(person) {
    // get the birth year of the person
    var birth = person.born;
    // get the birth year of the mother
    var motherBirth = byName[person.mother].born;
    // calculate the age difference
    var ageDiff = birth - motherBirth;
    // push it to our age differences array
    ageDifferences.push(ageDiff); 
  });

  return average(ageDifferences);
}

function hasKnownMother(person) {
  if (byName[person.mother] != null) {
    return true;
  }
  return false;
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
for the century as the value
  */
function averageAgeByCentury() {
  averageAges = {};
  
  ancestry.forEach((person) => {
      var century = assignCentury(person);
      var age = getAge(person);
      
      if (!averageAges.hasOwnProperty(century)) {
          averageAges[century] = [age];
      } else {
          averageAges[century].push(age);
      }
  });
  
  for (var century in averageAges) {
    averageAges[century] = average(averageAges[century]);
  }

  return averageAges;
}

function assignCentury(person) {
  return Math.ceil(person.died / 100);
}

function getAge(person) {
  return person.died - person.born;
}

// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

