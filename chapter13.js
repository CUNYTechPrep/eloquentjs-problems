/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data)
{
var table = document.createElement("table");
var fields = Object.keys(data[0]);
var tablerow = document.createElement("tr");
fields.forEach(function(field) {
var tablehead = document.createElement("th");
tablehead.textContent = field;
tablerow.appendChild(tablehead);
});
table.appendChild(tablerow);

data.forEach(function(info) {
var row = document.createElement("tr");
fields.forEach(function(field) {
var cell = document.createElement("td");
cell.textContent = info[field];
if(typeof info[field] == "number")
{
  cell.style.textAlign = "right";
}
row.appendChild(cell);
});
table.appendChild(row);
});

return table;
}


// Do not modify below here.
module.exports = { buildTable };
