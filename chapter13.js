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
    var row_name = document.createElement("tr");
	var name_p = Object.keys(data[0])
    for (var p in name_p) {
    	var header = document.createElement("th");
      	header.appendChild(document.createTextNode(name_p[p]));
        row_name.appendChild(header);
    }
    table.appendChild(row_name);
    for (var person in data) {
      	var row_data = document.createElement("tr");
    	for (var p in name_p) {
        	var data_td = document.createElement("td");
          	data_td.appendChild(document.createTextNode(data[person][name_p[p]]));
            if (typeof data[person][name_p[p]] === "number") {
           		data_td.style.textAlign  = "right";
            }
          	row_data.appendChild(data_td);
        }
      	table.appendChild(row_data);
    }
    return table;
}


// Do not modify below here.
module.exports = { buildTable };
