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
    var headRow = document.createElement("tr");
    var prop = Object.keys(data[0]);
    
    prop.forEach(function(props){
      var header = document.createElement("th");
      header.textContent = props;
      headRow.appendChild(header);
    });
    
    table.appendChild(headRow);
    
    data.forEach(function(Object){
      var row = document.createElement("tr");
      prop.forEach(function(props){
        var field = document.createElement("td");
        field.textContent = Object[props]; 
        	if(typeof Object[props] === "number") 
              field.style.textAlign = "right";
            
        row.appendChild(field);
      });
      table.appendChild(row);
    });

    return table;
  }




// Do not modify below here.
module.exports = { buildTable };
