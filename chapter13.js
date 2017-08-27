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
  var row = Object.keys(data[0]);
  var headRow = document.createElement('tr');

  row.forEach(function(row) {
    var element = document.createElement('th');
    element.textContent =  row;
    headRow.appendChild(element);
  });
  
  table.appendChild(headRow);

  // Loop over the key names once to fill in the top row 
  // and then again for each object in the array to construct the data rows.
  for (var i = 0; i < data.length; i++) {
      row = document.createElement('tr');
      for (var key in data[i]) {
      	var element = document.createElement('td');
        element.appendChild(document.createTextNode(data[i][key]));
        row.appendChild(element);
      }
      table.appendChild(row);
    }

  return table;
}


// Do not modify below here.
module.exports = { buildTable };
