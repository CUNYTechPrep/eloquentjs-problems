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
  // Your code here.
    var table = document.createElement("table");
    //Array with names of each key
    var title_names = Object.keys(data[0]);
    
    var title_row = document.createElement("tr");
    title_names.forEach(function(element){
      var cell = document.createElement("th");
      cell.textContent = element;
      title_row.appendChild(cell);
    });
    
    table.appendChild(title_row);
    
    //Fill table in
   data.forEach(function(element){
     var data_row = document.createElement("tr");
     //console.log(element);
     title_names.forEach(function(key){
       var cell = document.createElement("td");
       cell.textContent = element[key];
       data_row.appendChild(cell);
     });
     table.appendChild(data_row);
   });   
    return table;
}


// Do not modify below here.
module.exports = { buildTable };
