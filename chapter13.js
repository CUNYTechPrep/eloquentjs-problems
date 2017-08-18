/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data) {
  var table = document.createElement("table");
    
    var headerTextArray = Object.keys(data[0]);
    
    var tableRow = document.createElement("tr");
    
    for (var i = 0; i < headerTextArray.length; i++) {
      
      var textNode = document.createTextNode(headerTextArray[i]);
      
      var header = document.createElement("th");
      
      header.appendChild(textNode);
      
      tableRow.appendChild(header);
    }
    
    table.appendChild(tableRow);
    
    for (var i = 0; i < data.length; i++) {
      
      tableRow = document.createElement("tr");
      
      for (var j = 0; j < headerTextArray.length; j++) {
        
        var text = data[i][headerTextArray[j]];
        var textNode = document.createTextNode(text);
        
        var tableData = document.createElement("td");
        
        if(!isNaN(text))
        {
          tableData.style.textAlign = "right";
        }
        
        tableData.appendChild(textNode);
        tableRow.appendChild(tableData);
        // console.log(data[i][headerTextArray[j]]);
      }
      
      table.appendChild(tableRow);
    }
    
    return table;
}


// Do not modify below here.
module.exports = { buildTable };
