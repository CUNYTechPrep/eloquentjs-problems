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
    var tr = document.createElement("tr");
    var props = Object.keys(data[0]);
    var element;
    for(var i = 0; i < props.length; i++){
      element = props[i];
      var th = document.createElement("th");
      th.appendChild(document.createTextNode(element));
      tr.appendChild(th);
    }

    table.appendChild(tr);

    data.forEach(function(key){
      tr = document.createElement("tr");
      for(var j = 0; j < props.length; j++){
        var td = document.createElement("td");
        var properties = props[j];

        td.appendChild(document.createTextNode(key[properties]));
        if(typeof key[properties] == "number"){
          td.style.textAlign = "right";     
        }
        tr.appendChild(td);
      }

      table.appendChild(tr);
    });
    return table;
}


// Do not modify below here.
module.exports = { buildTable };
