/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */
var currentTable=document.querySelector("table");
 var newtable;

// Problem 1: Build table
function buildTable(data) {
  	newtable=document.createElement("table");
    for(var i in MOUNTAINS){
   	var tr=document.createElement("tr");
   	var th1=document.createElement("th");
   	var th2=document.createElement("th");
   	var th3=document.createElement("th");
   	var newcontent=document.createTextNode(MOUNTAINS[i].name);
   		var newcontent1=document.createTextNode(MOUNTAINS[i].height);
   			var newcontent2=document.createTextNode(MOUNTAINS[i].country);
   		th1.appendChild(newcontent);
   		th2.appendChild(newcontent1);
   		th3.appendChild(newcontent2);
    	tr.appendChild(th1);
    		tr.appendChild(th2);
    			tr.appendChild(th3);
    newtable.appendChild(tr);
    }
return newtable;
}
 document.body.appendChild(buildTable(MOUNTAINS)); //table on bottom

// Do not modify below here.
module.exports = { buildTable };
