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
    var headrow = document.createElement("tr");
    
    for(var k of Object.keys(data[0])){
      var headcell = document.createElement("th");
      var cell = document.createTextNode(k);
      headcell.appendChild(cell);
      headrow.appendChild(headcell);
      table.appendChild(headrow);
    }
    
    for(var mount of data){
      var bodyrow = document.createElement("tr");
      
      for(var m of Object.values(mount)){
        var bodycell = document.createElement("td");
        var cell = document.createTextNode(m);
        bodycell.appendChild(cell);
        bodyrow.appendChild(bodycell);
      }
      table.appendChild(bodyrow);
    }
    return table;
}


// Do not modify below here.
module.exports = { buildTable };
