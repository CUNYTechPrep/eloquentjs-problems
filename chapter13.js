/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data) {
    var node = document.createElement('TABLE');
    var row = document.createElement('TR');
    var keys = Object.keys(data[0]);

    node.appendChild(row);

    keys.forEach(function(name){
        var head = document.createElement('TH');
        row.appendChild(head);
        head.appendChild(document.createTextNode(name));
    });
    data.forEach(function(name){
        var row = document.createElement('TR');
        keys.forEach(function(val){
            var head = document.createElement('TD');
            row.appendChild(head);
            head.appendChild(document.createTextNode(name[val]));

            if(typeof name[val] == "number"){
                head.style.textAlign = "right";
            }
        })
        node.appendChild(row);
    });
    return node;
}

// Do not modify below here.
module.exports = { buildTable };
