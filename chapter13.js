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
    Object.keys(data[0]).forEach(function(content){
      var headerRow = document.createElement("th");
      headerRow.appendChild(document.createTextNode(content));
      row.appendChild(headerRow);
    });
    table.appendChild(row);
    for(var i=0; i<data.length; i++){
      var row = document.createElement("tr");
      Object.keys(data[i]).forEach(function(content){
        var cell = document.createElement("td");
        cell.appendChild(document.createTextNode(data[i][content]));
        if(!isNaN(data[i][content])) cell.style.textAlign = "right";
        row.appendChild(cell);
      });
      table.appendChild(row);
}


// Do not modify below here.
module.exports = { buildTable };
