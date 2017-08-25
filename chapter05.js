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
  return arrays.reduce(function concatenate(a, b) {
    return a.concat(b);
  });
}

// Problem 2: Mother-child age difference

var motherAgeDifference = function(person) {
  var mother = byName[person.mother];
  if(mother === undefined)
    return null;
  return person.born - mother.born;
}

var notNull = function(element) {
  return !(element === null);
}

/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  // map each object to the mother age difference, then filter out the nulls
  return average(ancestry.map(motherAgeDifference).filter(notNull));
}

// Problem 3: Historical life expectancy

// The groupBy function groups the items in the array
// based on the groups produced by the grouping function
function groupBy(array, grouping) {
  // empty object to hold the group name as the key and an array of values
  var object = {};
  // looping through the array
  for(var i = 0; i < array.length; i++) {
    // getting the group name/number from the grouping function
    var group = grouping(array[i]);
    // if this key/group wasn't defined before
    if(object[group] === undefined) {
      // then create a new group with an array of one item
      object[group] = [array[i]];
    }
    // else if the group was defined before, then append to the array
    else {
      object[group].push(array[i]);
    }
  }
  return object;
}

/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  var groupedObjects = groupBy(ancestry, function(person) {
    // getting the century when the person died
  	return Math.ceil(person.died / 100);
  });

  for(var k in groupedObjects) {
    // mapping each group's array elements into the age of the person
    groupedObjects[k] = average(groupedObjects[k].map(function(person) {
      return person.died - person.born;
    }));
  }
  return groupedObjects;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };
