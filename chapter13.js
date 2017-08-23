/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data) {
  // Initialize table
  let table = document.createElement('table');
  let row = document.createElement('tr');

  // Create header from object keys
  for(let property in data[0]){
    let header = document.createElement('th');
    header.appendChild(document.createTextNode(property));
    row.appendChild(header);
  }
  table.appendChild(row);

  // Create row for each entry and add to table
  for(let i=0; i<data.length; i++){
    row = document.createElement('tr');
    for(let prop in data[i]){
      let temp = document.createElement('td');
      let text = data[i][prop];
      temp.appendChild(document.createTextNode(text));
      // Right align
      if(typeof text == 'number'){
        temp.style.textAlign = "right";
      }
      row.appendChild(temp);
    }
    table.appendChild(row);
  }

  // Right align after the fact just for practice
  /*
  let entries = table.getElementsByTagName('td');
  for(let i=0; i<entries.length; i++){
    if (!isNaN(entries[i].textContent)){
			entries[i].style.textAlign = "right";
    }
  }
  */

  return table;
}


// Do not modify below here.
module.exports = { buildTable };
