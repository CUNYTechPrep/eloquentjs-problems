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
  var tr = document.createElement("tr");
  var headers = Object.keys(data[0]);
    
  for(var header in headers) {
    var th = document.createElement("th");
    th.appendChild(document.createTextNode(header));
    tr.appendChild(th);
  }
  table.appendChild(tr);
    
  data.forEach(function(element) {
    tr = document.createElement("tr");
    // why doesn't for in work here??
    for(var i = 0; i < headers.length; i++) {
      var td = document.createElement("td");
      td.appendChild(document.createTextNode(element[headers[i]]));
      tr.appendChild(td);
    }
    table.appendChild(tr);
  });
  return table;
}


// Do not modify below here.
module.exports = { buildTable };
