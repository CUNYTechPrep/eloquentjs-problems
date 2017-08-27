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
  var arr = arrays.reduce(function(all, item){
               return all.concat(item);
               
});


return arr;
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  // Your code here
  var arr = ancestry.map(function(ancestor){
   if (byName[ancestor.mother] != null)
     return ancestor.born - byName[ancestor.mother].born;
  else return null}).filter(function(number){
     if (number!=null)
       return number;
 
}); 
      return average(arr);    
}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  // Your code here

var av = {};

ancestry.forEach(function(person) {
  var century = Math.ceil(person.died / 100);
  var age = person.died - person.born;
  
  if (av.hasOwnProperty(century)){ 
    av[century].push(age);
  }
  else{ av[century] = [age];
      }
});

for(values in av){
  av[values] = average(av[values]);
}
return av;

}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

