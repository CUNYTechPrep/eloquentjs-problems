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
  var table = document.createElement('table');
  var headerRow = document.createElement('tr');

  for (header in data[0]) {
  	var th = document.createElement('th');
  	th.textContent = header;
  	headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  data.forEach(d => {
  	var row = document.createElement('tr');

  	for (prop in d) {
  		var td = document.createElement('td');
  		td.textContent = d[prop];
  		row.appendChild(td);
  	}
  	table.appendChild(row);
  });
  
  return table;
}


// Do not modify below here.
module.exports = { buildTable };
