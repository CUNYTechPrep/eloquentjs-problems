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
  var table = document.createElement('table');
  var headerRow = document.createElement('tr');
  table.appendChild(headerRow);

  var textNode, htmlNode, currRow, initial = 1;
  data.forEach(function(element) {
  	currRow = document.createElement('tr');
  	table.appendChild(currRow);
  	for(prop in element) {
  		if(initial) {
  			htmlNode = document.createElement('th');
  			textNode = document.createTextNode(prop);
  			htmlNode.appendChild(textNode);
  			headerRow.appendChild(htmlNode);
  		}
  		htmlNode = document.createElement('td');
  		textNode = document.createTextNode(element[prop]);
  		htmlNode.appendChild(textNode);
  		currRow.appendChild(htmlNode);
  	}
  	initial = 0;
  });
  return table;
}


// Do not modify below here.
module.exports = { buildTable };
