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
  var header = document.createElement('th');

  for (var i in data[0]) {
    header.appendChild(document.createTextNode(i));
    row.appendChild(header);
  }

  table.appendChild(row);

  // Loop over the key names once to fill in the top row 
  // and then again for each object in the array to construct the data rows.
  for (var i = 0; i < data.length; ++i) {
    row = document.createElement('td');

    var cell = document.createElement('td');
    for (var j in data[i]) {
      cell.appendChild(document.createTextNode(data[i][j]));
      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  return table;
}


// Do not modify below here.
module.exports = { buildTable };
