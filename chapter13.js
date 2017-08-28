/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data) {

  // create table
  var table = document.createElement('table');

  // create header row
  var headerRow = document.createElement('tr');

  // populate header row with keys
  let keys = Object.keys(data[0]);
  keys.forEach( function(key){
    var header = document.createElement('th');
    header.innerHTML = key;
    headerRow.appendChild(header);
  })

  // append header row
  table.appendChild(headerRow);

  // create row for each entry
  for(var i = 0; i < data.length; i++){
    var dataRow = document.createElement('tr');
    // create data for each property
    for(var j = 0; j < keys.length; j++){
      var tableData = document.createElement('td');
      tableData.innerHTML = data[i][keys[j]];
      dataRow.appendChild(tableData);
    }
    table.appendChild(dataRow);
  }

  document.body.appendChild(table);
  return table;
}


// Do not modify below here.
module.exports = { buildTable };
