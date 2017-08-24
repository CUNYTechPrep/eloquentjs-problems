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
  // Your code here
 // → [1, 2, 3, 4, 5, 6]
return (arrays.reduce(function(flatPortion, currentElement) {
    return flatPortion.concat(currentElement);
}, []));
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  // Your code here
  return (average(ancestry.filter(function(person) {
  return byName[person.mother] != null;
  }).map(function(person) {
  return person.born - byName[person.mother].born;
  })));

// → 31.2


}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  // Your code here
  
 // Average is a higher order function that categorizs
function average(array) {
  function sum(a, b) { return a + b; }
  return array.reduce(sum) / array.length;
}

// The categorize function below takes in an array as the first parameter and a 
// function as the second parameter/argument
function categorize(array, calculateCategory) {
  var categories= {}; 
  array.forEach(function(element) {
    var categoryName = calculateCategory(element);
    if (categoryName in categories)
      categories[categoryName].push(element); //If it's in the category/group,
    // we push that index to increase the number of elements at that index of the array
    else
      categories[categoryName] = [element]; // if it's not in category/group, 
    //then we add another index to the array
  });
  return categories;
}

function calculateCentury(person) {
  return Math.ceil(person.died / 100);
}

function get(k) {
    return map[k];
}

// We call the groupBy function and we pass in the arguments called ancestry, and 
// a function that finds the average.
var byCentury = categorize(ancestry, calculateCentury);
// Note: I think that we only need to include the parameter for the calculateCentury 
// function inside the categorize function when we call the calculateCentury function

var map = new Object();
for (var century in byCentury) {
  var ages = byCentury[century].map(function(person) {
    return person.died - person.born;
  });
  map[century] = average(ages); // we add the key century and the value ages to that index.
  console.log(century + ": " + average(ages));
}

console.log("Outputting map");
for(var i = 16; i <= 21; i++) {
  console.log(get(i));
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94


return map;

}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

