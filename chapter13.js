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
  let table = document.createElement('table');
  let headers = Object.keys(data[0]);
  let headerRow = document.createElement('tr');

  headers.forEach(function(head) {
    let header = document.createElement('th');
    header.appendChild(document.createTextNode(head));
    headerRow.appendChild(header);
  });
  table.appendChild(headerRow);

  data.forEach(function(mountain) {
    let newRow = document.createElement('tr');

    let name = document.createElement('td');
    name.appendChild(document.createTextNode(mountain['name']));

    let height = document.createElement('td');
    height.appendChild(document.createTextNode(mountain['height']));

    let country = document.createElement('td');
    country.appendChild(document.createTextNode(mountain['country']));

    newRow.appendChild(name);
    newRow.appendChild(height);
    newRow.appendChild(country);

    table.appendChild(newRow);
  });

  return table;
}


// Do not modify below here.
module.exports = { buildTable };
