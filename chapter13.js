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
    console.log(data);
    let header, tn, cell, row;
    let tab = document.createElement('table');
    for (let i = 0; i < data.length; i++) {
        row = document.createElement('tr');
        for (let key in data[i]) {
            if (i == 0) {
                header = document.createElement('td');
                tn = document.createTextNode(key);
                header.appendChild(tn);
                row.appendChild(header);
            } else {
                cell = document.createElement('td');
                tn = document.createTextNode(data[i][key]);
                cell.appendChild(tn);
                row.appendChild(cell);
            }
        }
        tab.appendChild(row);

    }
    return tab;
}


// Do not modify below here.
module.exports = {
    buildTable
};
