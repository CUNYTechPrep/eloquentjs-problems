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
var table = document.createElement("table");

              var tr = doucment.createElement("tr");

              var headers = Object.keys(data[0]);

              for(var i = 0;i<headers.length;i++){

              var head = headers[i];

              var characters = documents.createElement("th");

          characters.appendChild(document.createTextNode(head);

            tr.appenedChild(characters);

        }

              table.appendChild(tr);

 

        table.forEach(function (rowdata) {

            tr = document.createElement("tr");

            for (var i=0; i<headers.length; i++){

                var head = headers[i];

                var cd = document.createElement("td");

                cd.appendChild(document.createTextNode(rowdata[head]));

                if (typeof rowdata[head] == "number") {

                    cd.style.textAlign = "right";

                }

                tr.appendChild(cd);

            }

            table.appendChild(tr);

        });

        return table;

}

  

}


// Do not modify below here.
module.exports = { buildTable };
