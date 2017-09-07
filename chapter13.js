/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data) {
  let table = document.createElement("table");
  let attributes = Object.keys(data[0]);
  let top_row = document.createElement("tr");
  for (attrib in attributes) {
    let header_cell = document.createElement('th');
    header_cell.textContent = attrib;
    top_row.appendChild(header_cell);
  }
  table.appendChild(top_row);
  data.forEach((obj) => {                 //Each mountain object
    let table_row = document.createElement("tr");
    attributes.forEach((attrib) => {              //Name, Height, Country values
      let row_cell = document.createElement("td");
      row_cell.textContent = obj[attrib];
      if (typeof obj[attrib] == "number") {
        row_cell.style.textAlign == "right";
      }
      table_row.appendChild(row_cell);      
    });
    table.appendChild(table_row);
  });
  return table;
}


// Do not modify below here.
module.exports = { buildTable };
