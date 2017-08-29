/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data) {
    //Build headings
    var myTable = document.createElement("table");
    var headings = document.createElement("tr");
    for(var key in data[0]){
      var node = document.createElement("th");
      var textNode = document.createTextNode(key);
      node.appendChild(textNode);
      headings.appendChild(node);
    }
    myTable.appendChild(headings);
    //Build the entries
    for(var x=0; x<data.length; ++x){
      var entry = data[x];
      var row = document.createElement("tr");
      for(var key in entry){
        var item = document.createElement("td");
        var itemText = document.createTextNode(entry[key]);
        item.append(itemText);
        if(!isNaN(entry[key])){
          item.style.textAlign = "right";
        }
        row.append(item);
      }
      myTable.append(row);
    }
    return myTable;
  }


// Do not modify below here.
module.exports = { buildTable };
