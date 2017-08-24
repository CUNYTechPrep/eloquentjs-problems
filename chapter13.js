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
  // Your code here. This function accepts a parameterized array named data.
    var table = document.createElement("table"); 
    // We create a table in the HTML file
    
    var objectProperties = Object.keys(data[0]);
    // Each element in the data array has the same properties, so we can
    // use the object keys from the first element to represent the properties.
    var firstRow = document.createElement("tr");
  
    objectProperties.forEach(function(objectProperty) {
      var tableHeaderCell = document.createElement("th");
      tableHeaderCell.textContent = objectProperty;
      firstRow.appendChild(tableHeaderCell);
      // We add this table header cell celement
  });
    table.appendChild(firstRow); // We added the first row to the table
    
    // Next we create a row for each indexed object in the data array
      
    data.forEach(function(object) {
      var tableRow = document.createElement("tr");
      //Next we create a table data element for each property value
      objectProperties.forEach(function(objectProperty) {
        var tableCell = document.createElement("td");
        tableCell.textContent = object[objectProperty]; 
        //Note: object[objectProperty] returns a property value of the object array
        tableRow.appendChild(tableCell);
        //Next we check if the type of the table cell is a number
        if(typeof object[objectProperty] == "number") {
          tableCell.style.textAlign = "right";
        }
        tableRow.appendChild(tableCell);
      });
      //Next, append the row to the table
      table.appendChild(tableRow);
    });
    return table;
  

}


// Do not modify below here.
module.exports = { buildTable };
