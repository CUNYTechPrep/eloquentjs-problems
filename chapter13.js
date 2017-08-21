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
  <style>
  /* Defines a cleaner look for tables */
  table  { border-collapse: collapse; }
  td, th { border: 1px solid black; padding: 3px 8px; }
  th     { text-align: left; }
</style>

<script>
  function buildTable(data) {
    // Your code here.
    var tableElement = document.createElement("table")
    for(i=0; i<MOUNTAINS.length; i++){
      var row = tableElement.insertRow(i);
      var thRow = document.createElement("th");
      thRow.innerHTML = MOUNTAINS[i].country;
      row.appendChild(thRow);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = MOUNTAINS[i].name;
      cell1.className = "numbers";
      cell2.innerHTML = MOUNTAINS[i].height;
  }
  return tableElement;
}

function alignNumbersRight() {
  var alignNumbers = document.getElementsByClassName("numbers");
  for (i = 0; i < alignNumbers.length; i++) {
    alignNumbers[i].style.textAlign = "right";
  }
}  
  
  document.body.appendChild(buildTable(MOUNTAINS));
</script>
}


// Do not modify below here.
module.exports = { buildTable };
