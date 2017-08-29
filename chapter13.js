/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data) {
    
    //get dimensions
    var tableHeight = data.length;
    var tableWidth = 0;
    for(var elt in data[0])
        tableWidth++;
    
   var tbl = document.createElement("table");
    
   //Create table header
   var head = document.createElement("tr");
   tbl.appendChild(head);        
   for (var j = 0; j < tableWidth; j++){
         var tableHeader = document.createElement("th");
         head.appendChild(tableHeader);
         var headerInfo = document.createTextNode(Object.keys(data[0])[j]);
         tableHeader.appendChild(headerInfo);
    }
     
    //create table rows
     for (var i = 0; i < tableHeight; i++){
       
       //create new row in outer loop
       var newRow = document.createElement("tr");
       tbl.appendChild(newRow);
       
       for(var j = 0; j < tableWidth; j++){
     	//first get the column key 
         var columnKey = Object.keys(data[i])[j];
         
         var tableData = document.createElement("td");
         newRow.appendChild(tableData);
         var infoText = data[i][columnKey];
         //console.log(typeof infoText);
         var info = document.createTextNode(infoText);
         if((typeof infoText) == "number"){
           //console.log("in inner loop");
           tableData.style.textAlign = "right";
         }
         tableData.appendChild(info);
         
        }
     }
     
     return tbl;
}


// Do not modify below here.
module.exports = { buildTable };
