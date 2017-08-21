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
  let table = document.createElement("table");
  let rowHead = document.createElement("tr");
  let heads = Object.keys(data[0]);

  for(var i=0; i<heads.lengtg; i++){
  	let header = heads[i];
  	let child = document.createElement("th");
  	child.appendChild(document.createTextNode(heads));
  	rowHead.appendChild(child);
  }

  table.appendChild(rowHead);
  data.forEach(function(object){
  	let row = document.createElement("tr");
  	heads.forEach(function(heads){
  		let cell = document.createElement("td");
  		cell.textContent = object[heads];
  		if(typeof object[heads] === "number")
  			cell.style.textAlign = "right";
  		row.appendChild(cell);
  	});
  	table.appendChild(row)
  });
  return table;
}


// Do not modify below here.
module.exports = { buildTable };
