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
  let table = document.createElement("TABLE");
  let tr = document.createElement("TR");

  let propertyNames = Object.keys(data[0]);
  propertyNames.forEach(property => {
  	let th = document.createElement("TH");
  	th.appendChild(document.createTextNode(property));
  	tr.appendChild(th);
  });

  table.appendChild(tr);

  data.forEach(obj => {
  	tr = document.createElement("TR");
  	for(property in obj){
  		let td = document.createElement("TD")
  		td.appendChild(document.createTextNode(obj[property]));
  		tr.appendChild(td);
  	}
  	table.appendChild(tr);
  });

  return table;
}


// Do not modify below here.
module.exports = { buildTable };
