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
  var table = document.createElement("table");//create table eleent
  var fields = Object.keys(data[0]);//create fields
  var topRow = document.createElement("tr");//creates top row for fields
  for(var field in fields){
  	var header = document.createElement("th");
  	header.textContent = field;
  	topRow.appendChild(header);
  }
	table.appendChild(topRow);//append headrow
	data.forEach(function(obj){ //for each row, create row 
  		var nextRow = document.createElement("tr");
  		fields.forEach(function(field){
  			var cell = document.createElement("td");
  			if(typeof obj[field] === "number")	//if field is a number
  				cell.style.textAlign = "right";	//set cell to right align
  			cell.textContent = obj[field];	//set cell text content
  			nextRow.appendChild(cell);
  		});
  		table.appendChild(nextRow);
  });
  return table;

}


// Do not modify below here.
module.exports = { buildTable };
