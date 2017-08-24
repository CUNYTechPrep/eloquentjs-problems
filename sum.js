function range(start, end, step){
  	if(step == undefined){
      step = 1;
    }
    var arr = [];
  	if(start <= end){
    	for(var i=start; i<=end; i=i+step){
        	arr.push(i);
    	}
    }
  	else{
      for(var i=start; i>=end; i=i+step){
        	arr.push(i);
    	}
    }
    return arr;
}
function sum(array){
    var sum = 0;
    for(var i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum;
}

//reversing array
function reverseArray(array){
  var newArray = [];
  for(var i = array.length - 1; i >= 0; i--){
    newArray.push(array[i]);
  }
  return newArray;
}
function reverseArrayInPlace(array){
  for(var i=0; i<array.length/2; i++){
      var temp = array[i];
      array[i] = array[array.length-i-1];
      array[array.length-i-1] = temp;
  }
}

//a list

function arrayToList(array){
  var list = null;
  for(var i=array.length-1; i>=0; i--){
    list = {value: array[i],rest: list};
  }
  return list;
}
function listToArray(list){
  var array = [];
  for(var node=list; node; node=node.rest){
    array.push(node.value);
  }
  return array;
}
function prepend (value, rest){
  return {value: value, rest: rest};
}
function nth(list, n){
  if( n== 0){
    return list.value;
  }else{
    return nth( list.rest, n-1);
  }
}
//deep comparison
function deepEqual(object1,object2){
  if(object1 === object2) return true;
  else if( object1 == null || typeof object1 != "object" || object2 == null || typeof object2 != "object" ) return false;
  var property1 = 0;
  var property2 = 0;
  for(var i in object1){
    property1++;
  }
  for(var i in object2){
    property2++;
    if( !(i in object1) || !deepEqual(object1[i],object2[i])) return false;
  }
  return property1 === property2;
}
//flattening
return arrays.reduce(function(flat, current) {
  	return flat.concat(current);
});
//Mother-child age difference

var hasMother = ancestry.filter(function(person){
  return person.mother !== null && person.mother in byName;
});
var ageDiff = hasMother.map(function(person){
  return person.born - byName[person.mother].born;
});
return(average(ageDiff));

//historical

var averageAge = {};
ancestry.forEach(function(person){
  var age = person.died - person.born;
  var century = Math.ceil(person.died / 100);
  if(averageAge.hasOwnProperty(century) === false) averageAge[century] = [];
  averageAge[century].push(age);
});
for(var i in averageAge){
  averageAge[i] = average(averageAge[i]);
}
return averageAge;
//chapter 13
<style>
  /* Defines a cleaner look for tables */
  table  { border-collapse: collapse; }
  td, th { border: 1px solid black; padding: 3px 8px; }
  th     { text-align: left; }
</style>

<script>
  function buildTable(data) {
    var table = document.createElement("table");
    var row = document.createElement("tr");
    Object.keys(data[0]).forEach(function(content){
      var headerRow = document.createElement("th");
      headerRow.appendChild(document.createTextNode(content));
      row.appendChild(headerRow);
    });
    table.appendChild(row);
    for(var i=0; i<data.length; i++){
      var row = document.createElement("tr");
      Object.keys(data[i]).forEach(function(content){
        var cell = document.createElement("td");
        cell.appendChild(document.createTextNode(data[i][content]));
        if(!isNaN(data[i][content])) cell.style.textAlign = "right";
        row.appendChild(cell);
      });
      table.appendChild(row);
    }