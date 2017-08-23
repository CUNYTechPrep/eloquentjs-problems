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

    var tr = document.createElement("tr")

    var columns = Object.keys(data[data.length-1]);

    

     for (var i=0; i<columns.length; ++i) {

         var title = columns[i];

         var th = document.createElement("th");

         th.appendChild(document.createTextNode(title));

         tr.appendChild(th);

     }

    

     table.appendChild(tr);

    

     for(var i = 0; i < data.length;i++) {

       	 var row = data[i];

         var datatr = document.createElement("tr");

         for (var j=0; j<columns.length; j++) {

             var header = columns[j];

             var td = document.createElement("td");

 

             td.appendChild(document.createTextNode(row[header])) ;

	     	 if(row[header] === "number"){

             	td.style.textAlign = "right";

             }

             

             datatr.appendChild(td);

         }

         table.appendChild(datatr);

     }

        

     return table;

  }

  var MOUNTAINS = [

  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},

  {name: "Everest", height: 8848, country: "Nepal"},

  {name: "Mount Fuji", height: 3776, country: "Japan"},

  {name: "Mont Blanc", height: 4808, country: "Italy/France"},

  {name: "Vaalserberg", height: 323, country: "Netherlands"},

  {name: "Denali", height: 6168, country: "United States"},

  {name: "Popocatepetl", height: 5465, country: "Mexico"}

];

 document.body.appendChild(buildTable(MOUNTAINS));


// Do not modify below here.
module.exports = { buildTable };
