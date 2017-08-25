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
    var row = document.createElement("tr");
    var cells = Object.keys(data[0]);
    
    for(var i in cells) {
     	var header = document.createElement("th");
      	header.appendChild(document.createTextNode(cells[i]));
      	row.appendChild(header);
    }
    
    table.appendChild(row);
    
    for(var data1 in data) {
     	var rowInfo = document.createElement("tr");
      	for(var data2 in cells) {
          	var rowData = document.createElement("td");
          	rowData.appendChild(document.createTextNode(data[data1][cells[data2]]));
        	rowInfo.appendChild(rowData);
        }
    table.appendChild(rowInfo);
    }
    return table;
}


// Do not modify below here.
module.exports = { buildTable };
