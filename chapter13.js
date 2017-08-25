/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data) 
{
    var Frame = document.createElement("TABLE");
    var Header = document.createElement("tr");
    var category = Object.keys(data[0]);

    category.forEach(function(catalog)
    {
        var col = document.createElement("th")
        col.textContent = catalog;
        Header.appendChild(col);
    });
    Frame.appendChild(Header);

    data.forEach(function(dataSet)
    {
        var NewRow = document.createElement("tr");
        category.forEach(function(dataCata)
        {
          var Newcol = document.createElement("td"); 
          Newcol.textContent = dataSet[dataCata];
          NewRow.appendChild(Newcol);
        });

        Frame.appendChild(NewRow);

    });

    return Frame;

}


// Do not modify below here.
module.exports = { buildTable };
