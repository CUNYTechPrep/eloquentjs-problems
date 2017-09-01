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
  var table_row = document.createElement("tr");
  var thead_data = Object.keys(data[0]);

  for(var i = 0; i < thead_data.length; i++){
  	var head_element = thead_data[i];
  	var table_head = document.createElement("th");
  	table_head.appendChild(document.createTextNode(head_element));
  	table_row.appendChild(table_head);
  }
  table.appendChild(table_row);	//table header

  for(var k = 0; k < data.length; k++){
  	table_row = document.createElement("tr");
  	//add all three
  	for(var m = 0; m < thead_data.length; m++){
  		var head_col_name = thead_data[m];
  		var table_data = document.createElement("td");
  		var current_obj = data[k];
  		table_data.appendChild(document.createTextNode(current_obj[head_col_name]));

  		if(typeof current_obj[head_col_name] == "number"){
  			table_data.style.textAlign = "right";
  		}
  		table_row.appendChild(table_data);
  	}
  	table.appendChild(table_row);
  }
  return table;
}


// Do not modify below here.
module.exports = { buildTable };
