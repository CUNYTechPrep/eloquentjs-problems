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
	// Since all entries have the same set of properties, get the properties from the first item in the array
	var properties = Object.keys(data[0]);
	var table = document.createElement("table");
	// Create header
	var row = document.createElement("tr");
	for (var j = 0; j < properties.length; ++j) {
		var header = document.createElement("th");
		header.appendChild(document.createTextNode(properties[j]));
		row.appendChild(header);
	}
	table.appendChild(row);
	// Create rows
	for (var i = 0; i < data.length; ++i) { 
		var row = document.createElement("tr");
		for (var prop in data[i]) {
			var col = document.createElement("td");
			if (typeof(data[i][prop]) == 'number') col.style.textAlign = "right";
			col.appendChild(document.createTextNode(data[i][prop]));
			row.appendChild(col);
		}
		table.appendChild(row);
	}
	return table;
}


// Do not modify below here.
module.exports = { buildTable };
