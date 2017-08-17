const ch4 = require('./chapter04');


/*
 * The following tests demonstrate the simplest way to test our code.
 *  We use the describe() method to group tests for each problem. And
 *  we use test() for reporting what we're testing, and we use the
 *  expect(...).to...(...) functionality to run and check our codes results
 */
describe('Ch.4, Problem 1: The sum of a range', () => {
  const range = ch4.range;
  const sum = ch4.sum;

  test('range(1, 10)', () => {
    expect(range(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('range(5, 2, -1)', () => {
    expect(range(5, 2, -1)).toEqual([5, 4, 3, 2]);
  });

  test('range(1, 10, 2)', () => {
    expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
  });

  test('sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])', () => {
    expect(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(55);
  });

  test('sum([5, 4, 3, 2])', () => {
    expect(sum([5, 4, 3, 2])).toEqual(14);
  });

  test('sum([1, 3, 5, 7, 9])', () => {
    expect(sum([1, 3, 5, 7, 9])).toEqual(25);
  });
});


describe('Ch.4, Problem 2: Reversing an Array', () => {
  const reverseArray = ch4.reverseArray;
  const reverseArrayInPlace = ch4.reverseArrayInPlace;

  test('reverseArray(["A", "B", "C"])', () => {
    expect(reverseArray(["A", "B", "C"])).toEqual(["C", "B", "A"]);
  });

  test('reverseArray(["A", 45, "C", {}, null])', () => {
    expect(reverseArray(["A", 45, "C", {}, null])).toEqual([null, {}, "C", 45, "A"]);
  });

  test('reverseArray(array) does not modify in place', () => {
    var arrayValue = ["A", 45, "C", {}, null];
    reverseArray(arrayValue);
    expect(arrayValue).toEqual(["A", 45, "C", {}, null]);
  });

  test('reverseArrayInPlace([1, 2, 3, 4, 5])', () => {
    var arrayValue = [1, 2, 3, 4, 5];
    reverseArrayInPlace(arrayValue);
    expect(arrayValue).toEqual([5, 4, 3, 2, 1]);
  });

  test('reverseArrayInPlace(["A", 45, "C", {}, null])', () => {
    var arrayValue = ["A", 45, "C", {}, null];
    reverseArrayInPlace(arrayValue);
    expect(arrayValue).toEqual([null, {}, "C", 45, "A"]);
  });
});


describe('Ch.4, Problem 3: A List', () => {
  const arrayToList = ch4.arrayToList;
  const listToArray = ch4.listToArray;
  const prepend = ch4.prepend;
  const nth = ch4.nth;

  test('arrayToList([10, 20])', () => {
    expect(arrayToList([10, 20])).toEqual({value: 10, rest: {value: 20, rest: null}});
  });

  test('arrayToList([10, 20, 30])', () => {
    expect(arrayToList([10, 20, 30])).toEqual({value: 10, rest: {value: 20, rest: {value: 30, rest: null}}});
  });

  test('listToArray({value: 10, rest: {value: 20, rest: null}})', () => {
    expect(listToArray({value: 10, rest: {value: 20, rest: null}})).toEqual([10, 20]);
  });

  test('nth({value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}, 1)', () => {
    expect(nth({value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}, 1)).toEqual(20);
  });

  test('prepend(10, prepend(20, null))', () => {
    expect(prepend(10, prepend(20, null))).toEqual({value: 10, rest: {value: 20, rest: null}});
  });
});


describe('Ch.4, Problem 4: Deep comparison', () => {
  const deepEqual = ch4.deepEqual;
  const obj = {here: {is: "an"}, object: 2};

  test('deepEqual(obj, obj)', () => {
    expect(deepEqual(obj, obj)).toEqual(true);
  });

  test('deepEqual(obj, {here: 1, object: 2})', () => {
    expect(deepEqual(obj, {here: 1, object: 2})).toEqual(false);
  });

  test('deepEqual(obj, {here: {is: "an"}, object: 2})', () => {
    expect(deepEqual(obj, {here: {is: "an"}, object: 2})).toEqual(true);
  });
});
