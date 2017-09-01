/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data) {
  let table = document.createElement("table");
  let headings = Object.keys(data[0]);
  let headerRow = createRow(headings, true);
  table.appendChild(headerRow);
  data.forEach( (element) => {
    let rowData = Object.keys(data[0]).map((key) => {
      return element[key];
    });
    let row = createRow(rowData);
    table.appendChild(row);
  });
  return table
}

function createRow(data, isHeader) {
  let row = document.createElement("tr");
  data.forEach((element) => {
    let col = createCol(element, isHeader);
    row.appendChild(col);
  });
  return row;
};

function createCol(data, isHeader) {
  let col;
  if (isHeader){
    col = document.createElement("th");
  }
  else{ 
    col = document.createElement("td");
  }

  let content = document.createTextNode(data);
  col.appendChild(content);
  if (typeof data == "number"){
    col.style.textAlign = "right";
  }
  return col;
}

// Do not modify below here.
module.exports = { buildTable };
