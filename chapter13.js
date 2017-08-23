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

 // create elements <table> 
        var table     = document.createElement("table");
      
	for (var i= 0; i < data.length; i++) {

            // table row element created 
            var row = document.createElement("tr");

            for (var i = 0; i < 2; i++) {

                var dataValue =  document.createTextNode(data[i]); // the dataVaue of each array index is stored 
                row.appendChild(dataValue); // dataValue is added to the row 
            }

            //row is added to the table 
            table.appendChild(row);
        }
        // My thinking was to create a table anf then go over the data one by one and add the values to the row and then add row to the table  
}


// Do not modify below here.
module.exports = { buildTable };
