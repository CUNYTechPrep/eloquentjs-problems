/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data) {
  // create the table element itself
  table = document.createElement('table');
  
  // This section creates the table row for the header
  headers = Object.keys(data[0]);
  tableHeader = document.createElement('tr');
  headers.forEach(header => {
    tableData = document.createElement('td');
    text = document.createTextNode(header);
    tableData.appendChild(text);
    tableHeader.appendChild(tableData);
  });
  table.appendChild(tableHeader);
  
  
  /*
  For each row of record in the MOUNTAINS variable:
    Map each data in each record into table data ('td')
      Put those mapped data inside a row data ('tr')
      Append each row data ('tr') into the table ('table')
  */
  
  data.forEach(record => {
    tableRow = document.createElement('tr');
    for (let keys in record){
      tableData = document.createElement('td');
      text = document.createTextNode(record[keys]);
      tableData.appendChild(text);
      if (typeof record[keys] === 'number'){
        tableData.style.textAlign = 'right';
      }
      tableRow.appendChild(tableData);
    }
    table.appendChild(tableRow);
  });
  
  return table;
}


// Do not modify below here.
module.exports = { buildTable };
