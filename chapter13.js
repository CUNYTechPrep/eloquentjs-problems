/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data) {
    var table = document.createElement("TABLE");
    var header = Object.keys(data[0]);
	var row = document.createElement("tr");
    for(var i = 0; i< header.length; i++){
      var th = document.createElement("th");
      var thText = document.createTextNode(header[i]);
      th.appendChild(thText);
      row.appendChild(th);
    }
    
    table.appendChild(row);
    for(var i = 0; i < data.length;i++){
	  var rowForValues = document.createElement("tr");
      for(var key in data[i]){
      	var td = document.createElement("td");
      	var tdValues = document.createTextNode(data[i][key]);
      	td.appendChild(tdValues);
        rowForValues.appendChild(td);
      }
      table.appendChild(rowForValues);
    }
    return table;
}



// Do not modify below here.
module.exports = { buildTable };
