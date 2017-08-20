/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data) {
  let table = document.createElement("table");                // table
    table.style.borderCollapse = "collapse";
        let tr = document.createElement("tr");                // row element
        let headers = Object.keys(data[0]);                   // headers content

        for (let header of headers) {
            let th = document.createElement("th");            // header element
            th.style.border = "1px solid black";
            th.style.padding = "3px 8px";
            th.style.textAlign = "left";
            th.appendChild(document.createTextNode(header));
            tr.appendChild(th);
        }
        table.appendChild(tr);                                // add header row to the table
        
        data.forEach(dataRow => {                             // form data rows with content and style
            tr = document.createElement("tr");
            for (let header of headers) {
                let td = document.createElement("td");        // cell element
                td.style.border = "1px solid black";
                td.style.padding = "3px 8px";
                td.appendChild(document.createTextNode(dataRow[header]));
                if (typeof dataRow[header] === "number") {
                    td.style.textAlign = "right";
                }
                tr.appendChild(td);
            }
            table.appendChild(tr);
        });
        return table;
}


// Do not modify below here.
module.exports = { buildTable };
