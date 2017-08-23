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
function flatten(array, combine, start) {
  var current = [];
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
return current;
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

var ancestry = JSON.parse(ANCESTRY_FILE);

function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}

function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

var hasMotherMap = (filter(ancestry, function(person) {
  return person.mother != null;
}));

//console.log(hasMotherMap);

function addMomBDay(ancestor){
  var momName = ancestor["mother"];
  var momBDay;
  //console.log(momName);
  for (var i = 0; i < ancestry.length; i++)
    if (ancestry[i].name === momName)
      momBDay = ancestry[i].born;
  ancestor["momBDay"] = momBDay;
  //console.log(momBDay);
  
}

function getAgeDifference(person) {
  return person.born - person.momBDay;
}
forEach(hasMotherMap, addMomBDay);

var hasKnownMotherMap = (filter(ancestry, function(person) {
  return person.momBDay != null;
}));

//console.log(hasKnownMotherMap);

function getAgeDifferences(ancestorArray){
  var ageDifferenceArray = [];
  for (var i = 0; i < ancestorArray.length; i++){
    var difference = getAgeDifference(ancestorArray[i]);
    ageDifferenceArray.push(difference);
  }
  return ageDifferenceArray;
}
  
var ageDifferenceArray = getAgeDifferences(hasKnownMotherMap);
console.log(average(ageDifferenceArray));
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

function setCentury(person) {
  person["century"] = Math.ceil(person.died / 100);
}

function setAge(person) {
  person["age"] = person.died - person.born;
}

var ancestry = JSON.parse(ANCESTRY_FILE);

ancestry.forEach(setCentury);
ancestry.forEach(setAge);

function indexOf (array, key){
  for (var i = 0; i < array.length; i++){
    if (array[i] === key)
      return i;
  }
  return -1;
}

function mapCentury(famArray){
  var centuryMap = [];
  
  for (var i = 0; i < famArray.length; i++){
    var inMapAlready = false;
    var centuryMapIndex;
    for (var j = 0; j < centuryMap.length; j++){
      if(famArray[i].century === centuryMap[j].century){
        inMapAlready = true;
      	centuryMapIndex = j;
        break;
      }
    }
    if(!inMapAlready){
      var centuryMapObject = {};
      centuryMapObject.century = famArray[i].century;
      centuryMapObject.ages = [];
      centuryMapObject.ages.push(famArray[i].age);
      centuryMap.push(centuryMapObject);
    }
    else{
      centuryMap[j].ages.push(famArray[i].age);
    }
  }    
  return centuryMap;   
}

function getCenturyAverages(familyCenturies){
  var averageMap = [];
  for(var i = 0; i < familyCenturies.length;i++){
    var averageMapObject = {};
    averageMapObject.century = familyCenturies[i].century;
    averageMapObject.average = average(familyCenturies[i].ages);
    averageMap.push(averageMapObject);
  }
  return averageMap;
}

var agesByCentury = mapCentury(ancestry);

var averageByCentury = [];

console.log(getCenturyAverages(agesByCentury));

}


// Do not modify below here.
module.exports = { flatten, averageMomChildAgeDiff, averageAgeByCentury };

