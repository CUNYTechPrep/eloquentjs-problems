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
return (arrays.reduce(function(prev, current)
              {
  return prev.concat(current);
}));
}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageMomChildAgeDiff() {
  var gap = ageDiff(ancestry);

  return average(gap);
  }

function isAvailable(person)
{
	return byName[person.mother] != null
}

// function to calculate the gap between mom and child using byName[]
function calculate(person) 
{ 
	return person.born - byName[person.mother].born ;
}

function ageDiff(array)
{
    var checking = array.filter(isAvailable);

    var gapArray = checking.map(calculate);
    
    return gapArray;
}


// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */
function averageAgeByCentury() {
  var object = groupBy(ancestry, centuryCal);

  for(var i in object)
	{  
  		object[i] = average(object[i]);
	}
	return object;
}
// function calculate age of person
function ageCal(person)
{
  return person.died - person.born;
}

// function calculate century
function centuryCal(person)
{
  return Math.ceil(person.died / 100);
}

function groupBy(theArray, calculate)
{
  var info = {};
  
  theArray.map(function(person)
  {
    var century = calculate(person);
    var age = ageCal(person);
    
    if(info[century])
    {
      info[century].push(age);
    }
    else
    {
      info[century] = [age];
    }
  });
  return info;
}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

