/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data) {
//console.log(data);
    //console.log(data[0]);
    //console.log(typeof data);
    //console.log(typeof data[0]);
    
    //get dimensions
    var tableHeight = (data.length) + 1;
 	//console.log(tableHeight);
    var tableWidth = 0;
    for(var elt in data[0])
        tableWidth++;
    //console.log(tableWidth);
    
    //console.log(Object.keys(data[0]));
    //console.log(Object.values(data[0]));
    //console.log(Object.values(data[0])[0]);
    console.log(Object.values(data[0]).length);
    
   var tbl = document.createElement("table");
   var headerCreated = false;
   for(var i = 0; i < tableHeight; i++){
     
     //Create header
     if(!headerCreated){
       var head = document.createElement("tr");
       tbl.appendChild(head);
       for (var j = 0; j < Object.keys(data[i]).length; j++){
         var tableHeader = document.createElement("th");
         head.appendChild(tableHeader);
         var headerInfo = document.createTextNode(Object.keys(data[i])[j]);
         tableHeader.appendChild(headerInfo);
         headerCreated = true;
       }
     }
    
     var x = [];
     console.log(i);
     console.log(Object.values(data[0]));
     //console.log(Object.values(data[i]));
     /*console.log(Object.values(data[i]).length);
     /*var newRow = document.createElement("tr");
     /*tbl.appendChild(newRow);/*
     for (var j = 0; j < Object.values(data[i]).length; j++) {
       //var info = document.createTextNode(Object.values(data[i]))[j];
       var tableData = document.createElement("td");
       newRow.appendChild(tableData);
       //tableData.appendChild(info);
     }*/
     
     
   }
    // Your code here.
return tbl;
}


// Do not modify below here.
module.exports = { buildTable };
