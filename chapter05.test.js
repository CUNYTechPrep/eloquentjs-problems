const ch5 = require('./chapter05');


describe('Ch.5, Problem 1: Flatten', () => {
  const flatten = ch5.flatten;
  const arrays = [[1, 2, 3], [4, 5], [6]];

  test('flatten(arrays)', () => {
    expect(flatten(arrays)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

/* When we check floating point numbers we should use the `toBeCloseTo()` function */
describe('Ch.5, Problem 2: Mother-child age difference', () => {
  const averageMomChildAgeDiff = ch5.averageMomChildAgeDiff;

  test('averageMomChildAgeDiff()', () => {
    expect(averageMomChildAgeDiff()).toBeCloseTo(31.2, 1);
  });
});


describe('Ch.5, Problem 3: Historical life expectancy', () => {
  const averageAgeByCentury = ch5.averageAgeByCentury;
  const result = averageAgeByCentury();

  test('averageAgeByCentury()', () => {
    expect(result[16]).toBeCloseTo(43.5);
    expect(result[17]).toBeCloseTo(51.2);
    expect(result[18]).toBeCloseTo(52.789);
    expect(result[19]).toBeCloseTo(54.8, 1);
    expect(result[20]).toBeCloseTo(84.66, 1);
    expect(result[21]).toBeCloseTo(94);
  });
});