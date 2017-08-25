/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data) {
  var table = document.createElement("table");
  var headerRow = document.createElement("tr");
  var keys = Object.keys(data[0]);  // getting the keys of the first object

  // looping through the keys and putting them in <th> tags
  for(var i = 0; i < keys.length; i++) {
    var th = document.createElement("th");
    var key = document.createTextNode(keys[i]);
    th.appendChild(key);
    headerRow.appendChild(th);
  }

  // append the header row
  table.appendChild(headerRow);

  // loop through the objects and putting each object in its own row
  for(var i = 0; i < data.length; i++) {
    var tr = document.createElement("tr");
    for(var k in data[i]) {
      var td = document.createElement("td");
      var element = data[i][k];

      // if the element is a number, change the alignment and convert to string
      if(typeof element === "number") {
        td.style.textAlign = "right";
        element = element.toString();
      }
      td.appendChild(document.createTextNode(element));
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  return table;
}


// Do not modify below here.
module.exports = { buildTable };
