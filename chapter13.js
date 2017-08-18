/*
 * Add your solution to the chapter 13 problem from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */

function createTableData(text, elementType) {
	var type = elementType || 'td';
	var element = document.createElement(type);
	element.appendChild(document.createTextNode(text));
	return element;
}

function createRow(keyList, elementType, obj) {
	var row = document.createElement('tr');
	if (obj === undefined) {
		keyList.forEach( function (key) {
			row.appendChild(createTableData(key, elementType));
		});
	} else {
		keyList.forEach( function (key) {
			row.appendChild(createTableData(obj[key], elementType));
		});
	}
	return row;
}

function createTable(list) {
	var keyList = Object.keys(list[0]);
	var table = document.createElement('table');
	var header = createRow(keyList, 'th');
	table.appendChild(header);
	list.forEach( function (obj) {
		//var row = createRow(keyList, obj);
		//table.appendChild(row);
		table.appendChild(createRow(keyList, 'td', obj));
	});
	return table;
}

var buildTable = createTable

// Do not modify below here.
module.exports = { buildTable };
