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
    var headers = Object.keys(data[0]);
    for(var i=0;i<headers.length;i++){
      var header = headers[i];
      var th = document.createElement("th");
      th.appendChild(document.createTextNode(header));
      row.appendChild(th);
    }
    table.appendChild(row);
    
    data.forEach(function(rowdata){
      var row = document.createElement("tr");
 	  for(var i=0;i<headers.length;i++){
        var header = headers[i];
        var td = document.createElement("td");
        td.appendChild(document.createTextNode(rowdata[header]));
        if(typeof rowdata[header] == "number"){
          td.style.textAlign = "right";
        }
        row.appendChild(td);
      }
      table.appendChild(row);
    });
    return table;
}


// Do not modify below here.
module.exports = { buildTable };
