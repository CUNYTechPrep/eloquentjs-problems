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
    var row = document.createElement('tr');
    var header;
    for (var prop in data[0]) {
      header = document.createElement('th');
      header.appendChild(document.createTextNode(prop));
      row.appendChild(header);
	}
    table.appendChild(row);

    for (var i = 0; i < data.length; i++) {
      row = document.createElement('tr');
      var cell;
      for (var prop in data[i]) {
      	cell = document.createElement('td');
        cell.appendChild(document.createTextNode(data[i][prop]));
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
    var td = table.getElementsByTagName("td");
	for (var i = 0; i < td.length; i++) {
		if (!isNaN(td[i].textContent)){
			td[i].style.textAlign = "right";
        }
	}
    return table;
}

// Do not modify below here.
module.exports = { buildTable };
