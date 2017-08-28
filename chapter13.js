/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data) {
	var node=document.createElement("table");
	var row=document.createElement("tr");
	var headers= Object.keys(data[0]);
	for(var i=0;i<=headers.length-1;i++){
		var header=headers[i];
		var head=document.createElement("th");
		head.appendChild(document.createTextNode(header));
		row.appendChild(head);
	}
  	node.appendChild(row);
  	data.forEach(function(a){
  		row= document.createElement("tr");
  		for(var i=0; i<=headers.length-1; i++){
  			var header=headers[i];
  			var d=document.createElement("td");
  			d.appendChild(document.createElement(a[header]));
  			row.appendChild(d);
  		
  		}
  		node.appendChild(row)
  	})
  	return node;
  // Your code here
}


// Do not modify below here.
module.exports = { buildTable };
