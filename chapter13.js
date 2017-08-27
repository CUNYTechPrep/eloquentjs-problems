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

  for(var property in data[0]){
  	var header = document.createElement("th");
  	header.textContent = property;
  	row.appendChild(header);
  }
  table.appendChild(row);

  for(var info in data){
  	row = document.createElement("tr");
  	for (var moreInfo in data[info]){
  		var td = document.createElement("td");
  		td.textContent = data[info][moreInfo];
  		row.appendChild(td);
  	}
  	table.appendChild(row);
  }
  return table;
}


// Do not modify below here.
module.exports = { buildTable };
