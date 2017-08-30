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
    var row,
        properties,
        i, j,
        headerEle,
        dataEle,
        dataObj,
        text;
    if (data.length > 0) {
      //Create table header rows and append to table variable
      row = table.appendChild(document.createElement("tr"));
      properties = Object.keys(data[0]);

      for (i = 0; i < properties.length; i++) {
        headerEle = document.createElement("th");
        text = document.createTextNode(properties[i]);
        headerEle.appendChild(text);
        row.appendChild(headerEle);
      }

      // create rest of the table
      for (i = 0; i < data.length; i++) {
        row = table.appendChild(document.createElement("tr"));
        dataObj = data[i];
        for (j = 0; j < properties.length; j++) {
          dataEle = document.createElement("td");
          text = document.createTextNode(dataObj[properties[j]]);
          dataEle.appendChild(text);
          row.appendChild(dataEle);
        }
      }
    }
    return table;
}


// Do not modify below here.
module.exports = { buildTable };
