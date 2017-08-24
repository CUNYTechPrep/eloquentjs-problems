const ch13 = require('./chapter13');

const data = [
  { name: "Kilimanjaro", height: 5895, country: "Tanzania" },
  { name: "Everest", height: 8848, country: "Nepal" },
  { name: "Mount Fuji", height: 3776, country: "Japan" },
  { name: "Mont Blanc", height: 4808, country: "Italy/France" },
];

/*
 * This test demonstrates that Jest provides us access to a testing DOM.
 *    Here we inspect the generated table, using standard DOM calls
 */
describe('Ch.13, Problem 1: Build table', () => {
  const buildTable = ch13.buildTable;
  let table = buildTable(data);

  test('buildTable(data) produced a table', () => {
    expect(table.nodeName).toEqual('TABLE');

    if(table.children.length === 1
      && table.children[0].nodeName === 'TBODY') {
      table = table.children[0];
    }
    expect(table.children.length).toEqual(5);

    const row1 = table.children[1];
    expect(row1.nodeName).toEqual('TR');
    expect(row1.children.length).toEqual(3);

    const cols = row1.children;
    expect(cols[0].nodeName).toEqual('TD');
    expect(cols[0].textContent).toBe(data[0].name);
    expect(parseInt(cols[1].textContent)).toBe(data[0].height);
    expect(cols[2].textContent).toBe(data[0].country);
  });
});
