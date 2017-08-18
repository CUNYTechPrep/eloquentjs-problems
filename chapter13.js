/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data) {
  var table = document.createElement("table")
  var row = document.createElement("tr");
  table.appendChild(row);

  var headers = Object.keys(data[0]);
  headers.forEach(function(header){
    var node = document.createElement("th");
    var text = document.createTextNode(header)
    node.appendChild(text);
    row.appendChild(node);
  });

  data.forEach(function(entry){
    row = document.createElement("tr");
    table.appendChild(row);
    headers.forEach(function(column){
      var node = document.createElement("td");
      var text = document.createTextNode(entry[column])
      if (column == "height")
        node.style.textAlign = 'right';
      node.appendChild(text);
      row.appendChild(node);
    });
  });
  return table;
}


// Do not modify below here.
module.exports = { buildTable };
