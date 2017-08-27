/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data) {

     var table = document.createElement("TABLE");

     var keyList = Object.keys(data[0]);

      

      var row = document.createElement("TR");

      table.appendChild(row);

    for(var i in keyList) {

      var tableHeadingName = document.createTextNode(keyList[i]);

        var tableHeading = document.createElement("TH");

        row.appendChild(tableHeading);

        tableHeading.appendChild(tableHeadingName);

    }

    

    for(var i in data) {

      var mountainInfo = data[i];

        var row = document.createElement("TR");

        table.appendChild(row);

        for(var j in mountainInfo) {

            var info = document.createTextNode(mountainInfo[j]);

            var col = document.createElement("TD");

            row.appendChild(col);

            col.appendChild(info);

        }

    }   

    return table;  

  }

// Do not modify below here.
module.exports = { buildTable };
