const ch13 = require('./chapter13');

const data = [
  { name: "Kilimanjaro", height: 5895, country: "Tanzania", age: 32 },
  { name: "Everest", height: 8848, country: "Nepal", age: 21 },
  { name: "Mount Fuji", height: 3776, country: "Japan", age: 22 },
  { name: "Mont Blanc", height: 4808, country: "Italy/France" , age: 12},
];

/*
 * This test demonstrates that Jest provides us access to a testing DOM.
 *    Here we inspect the generated table, using standard DOM calls
 */
describe('Ch.13, Problem 1: Build table', () => {
  const buildTable = ch13.buildTable;
  const table = buildTable(data);

  test('buildTable(data) produced a table', () => {
    expect(table.nodeName).toEqual('TABLE');
    expect(table.children.length).toEqual(data.length + 1);

    const row1 = table.children[1];
    expect(row1.nodeName).toEqual('TR');
    expect(row1.children.length).toEqual(Object.keys(data).length);

    const cols = row1.children;
    expect(cols[0].nodeName).toEqual('TD');
    expect(cols[0].textContent).toBe(data[0].name);
    expect(parseInt(cols[1].textContent)).toBe(data[0].height);
    expect(cols[2].textContent).toBe(data[0].country);
  });
});
