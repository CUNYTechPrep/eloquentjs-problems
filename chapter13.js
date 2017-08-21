/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data) {
  let headers = Object.keys(data[0]);                                                                        
  const table = document.createElement("table");                                                           
  let trHeaders = document.createElement("tr");                                                          
  for (let i = 0; i < headers.length; i++) {                                                                
    let headerTitle = document.createTextNode(headers[i]);                                                     
    let th = document.createElement("th");                                                               
    th.appendChild(headerTitle);                                                                        
    trHeaders.appendChild(th);                                                                           
  }                                                                                                      
  table.appendChild(trHeaders);                                                                          
  for (let j = 0; j < data.length; j++) {                                                                
      let row = data[j];                                                                                 
      let trBody = document.createElement("tr");                                                             
      for (let j = 0; j < headers.length; j++) {                                                            
          var item = document.createTextNode(row[headers[j]]); 
          var td = document.createElement("td");                                                         
          td.appendChild(item);                                                                   
          trBody.appendChild(td);                                                                            
      }                                                                                                  
      table.appendChild(trBody);                                                                             
    }                                                                                                    
  return table;  
  }
module.exports = { buildTable };
