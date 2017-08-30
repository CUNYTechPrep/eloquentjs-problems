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
  var firstRow = document.createElement("tr");
  var fields = Object.keys(data[0]);

  fields.forEach(field =>{
  	let cell = document.createElement("th");
  	cell.textContent = field;
  	firstRow.appendChild(cell);
  });
  table.appendChild(firstRow);

  data.forEach(object => {
  	var row = document.createElement("tr");
  	fields.forEach(field=>{
  	let cell = document.createElement("td");
  	cell.textContent = object[field];
  	if(typeof object[field] == "number")
  		cell.style.textAlign = "right";
  	row.appendChild(cell);

  	});
  	table.appendChild(row);

  });

  return table;
}


// Do not modify below here.
module.exports = { buildTable };
