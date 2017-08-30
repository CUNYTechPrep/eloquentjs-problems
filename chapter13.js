/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data) {
  // Your code here
   var table = document.createElement("table");
   var headerRow = document.createElement("tr");
    
    var key = Object.keys(data[0]);
    Object.keys(key).forEach(
      	function(a) {
          	var tableHeader = document.createElement("th");
      		tableHeader.appendChild(document.createTextNode(key[a]));
      		headerRow.appendChild(tableHeader);
        }
    );
    table.appendChild(headerRow);
    
    data.forEach(
      function(a) {
      	var tr = document.createElement("tr");
        for (var i = 0; i < key.length; i++) {
        	var td = document.createElement("td");
          	td.appendChild(document.createTextNode(a[key[i]]));
          	tr.appendChild(td);
        }
        table.appendChild(tr);
      }
    ); 

    return table;
}


// Do not modify below here.
module.exports = { buildTable };
