/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data) {
  let table = document.createElement('table');
  let row = document.createElement('tr');
  let cell = document.createElement('td');

  let th_name = document.createElement('th');
  let th_height = document.createElement('th');
  let th_country = document.createElement('th');
  let t_row = row.cloneNode();
  th_name.innerHTML = 'Name';
  th_height.innerHTML = 'Height';
  th_country.innerHTML = 'Country';
  t_row.appendChild(th_name);
  t_row.appendChild(th_height);
  t_row.appendChild(th_country);
  table.appendChild(t_row);
  
  data.forEach(function(obj){
    let n_row = row.cloneNode();
    for (let i in obj) {
      let n_cell = cell.cloneNode();
      n_cell.innerHTML = obj[i];
      n_row.appendChild(n_cell);
    }
    table.appendChild(n_row);
  });

  return table;
}


// Do not modify below here.
module.exports = { buildTable };
