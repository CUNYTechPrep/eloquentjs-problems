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
  let table = document.createElement('table');

  for(let i=0; i<data.length; i++){
    let tr = document.createElement('tr');
    for(let key in data[i]){
        let txt = document.createTextNode(data[i][key])

        let td = document.createElement('td');
        if(key=='height') td.setAttribute('class', 'right');

        td.appendChild(txt);
        tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  
  return table;
}


// Do not modify below here.
module.exports = { buildTable };
