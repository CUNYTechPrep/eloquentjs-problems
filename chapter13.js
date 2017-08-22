/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data) {
		let headerData = Object.keys(data[0]);
		let table = document.createElement('table');
		let headRow = document.createElement('tr');
		headerData.forEach(header => {
			let ele = document.createElement('th');
			ele.textContent = header;
			headRow.appendChild(ele)
		})
		table.appendChild(headRow);

		data.forEach(obj => {
			let row = document.createElement('tr');
			for(prop in obj) {
				let ele = document.createElement('td');
				ele.textContent = obj[prop]
				row.appendChild(ele)
			}
			table.appendChild(row)
		})

		return table;
}



// Do not modify below here.
module.exports = { buildTable };
