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
  //create a new table element, give some content
    		var newTable = document.createElement("table");
    		var keys = Object.keys(data[0]);


    		for (var i = 0; i < data.length; i++) {
    			// Insert a row in the table at row index i
  				var newRow = newTable.insertRow(i);

  				for (var j = 0; j < keys.length; j++) {
  					// Insert a cell in the row at index j
  					var newCell = newRow.insertCell(j);

  					// Append a text node to the cell
  					var newText = document.createTextNode(Object.values(data[i])[j]);
  					newCell.appendChild(newText);
  				}

			}


			//to create a header row
    		var headRow = newTable.insertRow(0);
    		for (var i = 0; i < keys.length; i++) {
    			var th = document.createElement("th");
    			headRow.appendChild(th);
    			var text = document.createTextNode(keys[i]);
    			th.appendChild(text);
    		}

  			return newTable;
}


// Do not modify below here.
module.exports = { buildTable };
