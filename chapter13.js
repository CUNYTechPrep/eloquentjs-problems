/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data) {
  return createTable(data);
}

// given an array of objects returns a new table DOM element that includes the
// information from each object entry formatted in a table with a header row
function createTable(data) {
  let table = document.createElement("table");

  // add header table row
  let headings = Object.keys(data[0]);
  let headerRow = createTableRow(headings, true);
  table.appendChild(headerRow);

  // add data from array of objects
  data.forEach((element) => {
    // NOTE: DEBUG CODE
    // console.log(element);
    // NOTE: Object.values() is not supported in all browsers
    // let rowData = Object.values(element);
    let rowData = Object.keys(data[0]).map((key) => {
      return element[key];
    });

    let row = createTableRow(rowData);
    table.appendChild(row);
  });

  // return table
  return table
}

// given a collection, data, creates a tablerow with n columns
// if optional parameter isHeader exists, returns a th instead of a tr
function createTableRow(data, isHeader) {
  
  // create a table row
  let row = document.createElement("tr");
  
  // create columns with collection of data
  data.forEach((element) => {
    let col = createTableCol(element, isHeader);
    // add column to our row
    row.appendChild(col);
  });
  // return DOM element
  return row;
};

// given some data, returns a table column DOM element
// if optional parameter isHeader exists, returns a th instead of a tr
function createTableCol(data, isHeader) {
  let col;
  
  // if isHeader exists
  if (isHeader)
    col = document.createElement("th");
  // Otherwise...
  else 
    // create a table data column
    col = document.createElement("td");
  // create a text node for the data for that column
  let content = document.createTextNode(data);
  // append content to column
  col.appendChild(content);

  // BONUS: right-align cells containing numbers
  if (typeof data == "number")
    col.style.textAlign = "right";

  // return DOM element
  return col;
}


// Do not modify below here.
module.exports = { buildTable };
