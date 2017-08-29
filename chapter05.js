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
  var newArr = arrays.reduce(function(a,b){
  	return a.concat(b);
  });
  return newArr;
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// My code here.
var ageDifs = [];
for(var person in byName){
  var momName = byName[person].mother;
  if(typeof byName[momName] === "undefined"){ //Mom DNE
    ageDifs.push(null);
  }
  else{//Mom is defined, let's get the age difference
    ageDifs.push(byName[person].born - byName[momName].born);
  } 
}

var finalArray = ageDifs.filter(function(entry){
  return entry != null;
});
return average(finalArray);

}

// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {

  function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
  }

  function group(genAvg,person){
    var gen = Math.ceil(person.died / 100);
    if(typeof genAvg[gen] === "undefined"){
      genAvg[gen] = [];
      genAvg[gen].push(person.died - person.born);
    }
    else{
      genAvg[gen].push(person.died - person.born);
    }
  }

  //my code

  var byName = {};
    ancestry.forEach(function(person) {
    byName[person.name] = person;
  });

  var genCollection = {};
  for(key in byName){
    group(genCollection, byName[key]);
  }
  for(generation in genCollection){
    //console.log(genCollection);
    genCollection[generation] = average(genCollection[generation]);
  }
  return genCollection;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

