/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
 function buildTable(d) {
      var table = document.createElement("table");
      var first_row = document.createElement("tr");
      var f = Object.keys(d[0]);
      
      f.forEach(fld => {
        var first_cell = document.createElement("th");
        first_cell.textContent = fld;
        first_row.appendChild(first_cell);}
      );
      table.appendChild(first_row);
      d.forEach(obj => {
        var r = document.createElement("tr");
        f.forEach(fld => {
          var c = document.createElement("td");
          c.textContent = obj[fld];
          if (typeof obj[fld] == "number")
            c.style.textAlign = "right";
          r.appendChild(c);
        });
        table.appendChild(r);
      });
      return table;
    }


// Do not modify below here.
module.exports = { buildTable };
