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
function concat(a,b){
  return a.concat(b);
};

function flatten(arrays) {
  // Your code herevar 

  newArray = arrays.reduce(concat(a,b)); 
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  // Your code here
var mothersAge = []; // the mother's age will be stored here 
// Here I was a little confused. I was not sure how to find the mother's and the child's age
// I do know that when the data should be stored in an array and after that itshould compute the values 
  var avg = average(mothersAge); //commutes the average of the mothers age 
  return avg; // the average value is returned 

}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  // Your code here
  var centuryArray = []; // this is the array that will be hold all the values that will be avarged 
 
  ancestry.forEach(funtion(person){
  	
  centuryArray.push(Math.ceil(person.died / 100)); // placing the values into the array 
  }

  //once the values are in the array finding the average and returning the avg 
  var avg = average(centureArray); 
  return avg; // should return the average values 
  // I think I solved part of the problem but did ot retur the object/map. I am not sure what was meant by the object/map 
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

