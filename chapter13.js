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
	//create the table node
  	var table = document.createElement("table");
    
    //create the table header row
    var rowHeader = document.createElement("tr");
    
    //Add the table header row into the table
    table.appendChild(rowHeader);
    
    // Create the array contains headName 
    var headName = Object.keys(data[0]);
    
    /* use for loop to create table header row for the data array
    	create head node to contain the header
        add the content into the node
        add the head into the row
        add the row into the table*/
    for(var i = 0; i < headName.length; i++)
    {	
      var head = document.createElement("th");
      head.textContent = headName[i];
      rowHeader.appendChild(head);
    }
    table.appendChild(rowHeader);
   
    /* use 2 for loop to create table header row for the data array
        
        the first for loop is the element in the data array, loop each element
        create new table row node for each element in array
        
        the second for loop, create the table data node
        fill the data into tableData
        use the right-align cells containing numbers by style.textAlign
    */
    for(var field = 0; field < data.length; field++)
    { 
      var dataRow = document.createElement("tr");
      
      for(var k = 0; k < headName.length; k++)
   	  {
        var tableData = document.createElement("td");
        tableData.textContent = data[field][headName[k]];
   
        if(typeof data[field][headName[k]] == "number")
        {
          tableData.style.textAlign = "right";
        }
		dataRow.appendChild(tableData);
      }
       table.appendChild(dataRow);
    }  
    return table;
}


// Do not modify below here.
module.exports = { buildTable };
