/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data) {
  var table = document.createElement("table");
    var arr = Object.keys(data[0]);
    var row = document.createElement("tr");
    for (var i = 0; i < arr.length; i++) {
    	var cell = document.createElement("th");
        var cellText = document.createTextNode(arr[i]);
      	cell.appendChild(cellText);
    	row.appendChild(cell);
    	table.appendChild(row);
    };
    	
    for (var i = 0; i < data.length; i++) {
      	var row = document.createElement("tr");
    	var cell1 = document.createElement("td");
        var cellText1 = document.createTextNode(data[i][arr[0]]);
      	cell1.appendChild(cellText1);
        var cell2 = document.createElement("td");
        var cellText2 = document.createTextNode(data[i][arr[1]]);
      	cell2.appendChild(cellText2);
        var cell3 = document.createElement("td");
        var cellText3 = document.createTextNode(data[i][arr[2]]);
      	cell3.appendChild(cellText3);
      	row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        table.appendChild(row);
    };
  		return table;
}


// Do not modify below here.
module.exports = { buildTable };
