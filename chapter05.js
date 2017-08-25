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
function flatten(TableArray)
{


/*
 // The Shortened Form for this function is:
  function flatten(TableArray)
  {
    return TableArray.reduce(function(a,b){ return a.concat(b);},[]);
  }
 // 
*/ 

//The following is detailed form of how it should be done without using any built-in funciton such as reduce.
  var HighOrderArray = [];
  	
  for(var index in TableArray)
  {
	for(var tableIndex in TableArray[index])
      HighOrderArray.push(TableArray[index][tableIndex]);
  }
  return HighOrderArray;

}

// Problem 2: Mother-child age difference
/* This must return the average age difference instead of printing it */
function averageFinder(array) {
  function plus(a, b) 
  { return a + b; }
  return array.reduce(plus) / array.length;
}

function averageMomChildAgeDiff() { 
  var differences = ancestry.filter(function(person) 
  {
    return byName[person.mother] != null;
  }
  ).map(function(person) 
  {
    return person.born - byName[person.mother].born;
  });

  return averageFinder (differences);
}



// Problem 3: Historical life expectancy
/* This must return the object/map with centuries as keys and average age
    for the century as the value
 */


function groupBy(array,groupOf)
{
  var group = {};
  
  array.forEach(function (element)
  {
    var groupName = groupOf(element);
    
    if(groupName in group)
      group[groupName].push(element);
    else
      group[groupName] = [element];
    
  })
  return group;
}
function averageAgeByCentury(century) 
{
  var result_averageLifespan={};
  var age;
  var InCentury = groupBy(ancestry,function(person)
  {
      return Math.ceil(person.died / 100);
  });
  for(var century in InCentury)
  {
      age = InCentury[century].map(function(person)
      {
        return person.died - person.born;
      });     
      
    result_averageLifespan[century] = averageFinder(age);
      
  }

  return result_averageLifespan;

}



// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

