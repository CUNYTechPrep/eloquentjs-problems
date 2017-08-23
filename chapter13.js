/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */

 var MOUNTAINS = [
   {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
   {name: "Everest", height: 8848, country: "Nepal"},
   {name: "Mount Fuji", height: 3776, country: "Japan"},
   {name: "Mont Blanc", height: 4808, country: "Italy/France"},
   {name: "Vaalserberg", height: 323, country: "Netherlands"},
   {name: "Denali", height: 6168, country: "United States"},
   {name: "Popocatepetl", height: 5465, country: "Mexico"}
 ];

 if (typeof module != "undefined" && module.exports)
   module.exports = MOUNTAINS;

// Problem 1: Build table

  function buildTable(data) {
    var table = document.createElement("table");
    var tr = document.createElement("tr");
    var headers = Object.keys(data[0]);
    /*Adds the row headers: name, height, country respectively */
    for(var i = 0; i < headers.length; i++) {
      var header = headers[i];
      var th = document.createElement("th");
      th.appendChild(document.createTextNode(header));
      tr.appendChild(th);
    }//for
    table.appendChild(tr);

    /* Adds the mountain data wrt its header */
    data.forEach(function(rowdata) {
      tr = document.createElement("tr");
      for(var i = 0; i < headers.length; i++){
        var header = headers[i];
        var td = document.createElement("td");
        td.appendChild(document.createTextNode(rowdata[header]));
        if(typeof rowdata[header] == "number") {
          td.style.textAlign = "right";
        }//IF
        tr.appendChild(td);
      }//FOR
      table.appendChild(tr);
    });
    return table;
  }

  document.body.appendChild(buildTable(MOUNTAINS));

// Do not modify below here.
module.exports = { buildTable };
