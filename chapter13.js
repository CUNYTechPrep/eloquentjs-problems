/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: Build table
function buildTable(data) {
	let tbl = document.createElement('table');
	let tr = document.createElement('tr');
	let keys = Object.keys(data[0]);
	for (let i = 0; i < keys.length; i++){
		let th = document.createElement('th');
		th.appendChild(document.createTextNode(keys[i]));
		// console.log(eachKey);
		// console.log(Object.keys(data[0]));
		tr.appendChild(th);
	}
	tbl.appendChild(tr);

	tr = document.createElement('tr');
	for(let j = 0; j < data.length; j++){
		tr = document.createElement('tr');
		// console.log(eachObject);
		for(var eachKey in data[j]){
			let td = document.createElement('td');
			td.appendChild(document.createTextNode(data[j][eachKey]));
			tr.appendChild(td);
			// console.log(eachKey);
		}
		tbl.appendChild(tr);
	}
	
	

	return tbl;
}


// Do not modify below here.
module.exports = { buildTable };
