/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(arr) {

          var table = document.createElement("table");
          var tableRow = document.createElement("tr");

          var header = arr[0];
          
          for (key in header)
          { var textNode = document.createTextNode(key)
            var tableHead = document.createElement("th");
            table.appendChild(tableRow).appendChild(tableHead).appendChild(textNode);
          }
          console.log(table); 

          var length = 0; 

          while(length <= arr.length-1)
          { 
             var tableRow = document.createElement("tr");
            for (key in arr[length])
            {
              var tableData = document.createElement("td");
              var textNode = document.createTextNode(arr[length][key])
              if(typeof arr[length][key]== 'number')
                  tableData.style.textAlign = "right";
               
               table.appendChild(tableRow).appendChild(tableData).
               appendChild(textNode);
                
            }
            length++;
          }
          return table;

}


// Do not modify below here.
module.exports = { buildTable };
