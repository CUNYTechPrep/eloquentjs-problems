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
    var tr = document.createElement("tr");

    // Create thead section
    for(var prop in data[0]) {
      var th = document.createElement("th");
      th.textContent = prop;
      tr.appendChild(th);
    }

    table.appendChild(tr);

    // Create tbody section
    for(var i = 0; i < data.length; i++) {
      tr = document.createElement("tr");
      for(var prop in data[i]) {
        var td = document.createElement("td");
        td.textContent = data[i][prop];
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }

    return table;
}


// Do not modify below here.
module.exports = { buildTable };
