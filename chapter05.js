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
function flatten(arrays)
{
  var newarray =[];
  for(var i = 0; i < arrays.length;i++)
  {
    newarray = newarray.concat(arrays[i]);
  }
  return newarray;
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {


  var diff = ancestry.filter(function(person) {
    return byName[person.mother] != null;
  }).map(function(person) {
    return person.born - byName[person.mother].born;
  });
  return average(diff)
}


// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  
  var d16 = [];
  var d17 = [];
  var d18 = [];
  var d19 = [];
  var d20 = [];
  var d21 = [];
  var map = new Object();


   var d;
    var age;

   ancestry.forEach(function(person) {
     age = person.died-person.born;
     d= Math.ceil(person.died / 100);
     switch(d)
     {
       case (16):
         d16.push(age);
         break;
       case (17):
         d17.push(age);
         break;
       case (18):
         d18.push(age);
         break;
       case (19):
         d19.push(age);
         break;
       case (20):
         d20.push(age);
         break;
       case (21):
         d21.push(age);
         break;

     }

   });


 var map = {"16":average(d16),"17":average(d17),
 "18":average(d18),"19":average(d19),"20":average(d20),
"21":average(d21)};



return map;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };
