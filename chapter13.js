/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *	- DO NOT rename the functions below.
 *	- You may add other functions if you need them.
 *	- You may rename the parameters.
 *	- DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data) {

	let table = document.createElement("table")
	let elements = Object.keys(data[0])
	let tRow = document.createElement("tr")

	for (let i in elements)
    {
    	let cell = document.createElement("th")
    	cell.textContent = elements[i]
    	tRow.appendChild(cell)
    }
	table.appendChild(tRow)

	for(let i in data)
	{
	  let row = document.createElement("tr")
	  for(let j in elements)
	  {
	  	let temp = elements[j]
	  	let cell = document.createElement("td")
	  	cell.textContent = data[i][temp]
	  	row.appendChild(cell)
	  }
	  table.appendChild(row)
	}

	return table
  }


// Do not modify below here.
module.exports = { buildTable };
