/*
 * Add your solutions to the chapter 4 problems from the eloquentjs book.
 *    - DO NOT rename the functions below.
 *    - You may add other functions if you need them.
 *    - You may rename the parameters.
 *    - DO NOT modify the number of parameters for each function.
 */


// Problem 1: The sum of a range
function range(start=0, end, step=1) {
	/*
	if (start === undefined) {
		start = 0
	}
	if (step === undefined) {
		step = 1
	}
	*/
	lst = [];
	first = start;
	last = end;
	if (step > 0) {
		// Rereading the textbook, the start is alwas the beginning number
		// of the range, not the 'lower' number. Whoops.
		//first = start
		//last = end
		test = (i) => i <= end;
	} else if (step < 0) {
		//first = end
		//last = start
		test = (i) => i >= end;
	}

	for (let i = first; test(i); i += step) {
		lst.push(i)
	}
	return lst
}

// Preconditions: lst must be a javascript array. It may be empty.
function sum(lst) {
	return lst.reduce((s, y) => s+y, 0)
}

// Problem 2: Reversing an Array

function reverseArray (lst) {
	reversed = [];
	for (let i = 0; i < lst.length; i++) {
		reversed.push( lst[lst.length - (i + 1)] );
	}
	return reversed;
}

// In general, to reverse a string s = xe, where x is a prefix of the
// string, and e is a the last character, s^r = e(x^r) So I take the
// front, place it in the beginning, and then proceed to do the exact
// same for all elements in the array, excluding the very beginning.
function reverseArrayInPlace (lst) {
	for (let i = 0; i < lst.length; i++) {
		var end = lst.pop();
		lst.splice(i, 0, end);
	}
}



// Problem 3: A List
// Could I do this iteratively, instead of doing this recursively?
// Actually, yes I could. I keep appending pieces of the end onto the
// "beginning".  The problem with that is I'm not sure what an empty
// list is.  For now, no empty lists are allowed, and the argument 'lst'
// is not allowed to be empty.

// In scheme, the 'rest' would be the empty list (at the very end, the
// dictionary's structure here is essentially a cons cell), which is
// some value. So I can just make up some value. Instead of a special
// pointer, I'm going to make it null.
//
// 'null' is the empty list in this implementation, and the last element
// of every list is the empty list.
//
// So this is basically building up a list through repeated use of
// 'cons', and starting at the end of the array and reversing.

// Preconditions: arr is a javascript array.
// Postconditions: If arr is an emtpy list, then return 'null'.
function arrayToList(arr) {
	var beginningOfList = null;
	for (let pos = arr.length - 1; pos >= 0; pos--) {
		//beginningOfList = { 'value' : arr[pos], 'rest' : beginningOfList };
		beginningOfList = prepend(arr[pos], beginningOfList);
	}
	return beginningOfList;
}

// Preconditions: list is any list, including the empty list (null).
// Postconditions: Returns an empty array if given the empty list, and
// otherwise returns an array whose elements are the elements of the
// given list, in the order that the list's elements appear.
function listToArray(list) {
	// Invariant: At the start of every iteration, arr contains all of the
	// elements from currentList that have already been seen.
	var arr = [];
	var currentList = list;
	while (currentList !== null) {
		arr.push(currentList.value);
		currentList = currentList.rest;
	}
	return arr;
}

function nth(list, position) {
	var curPos = position;
	var curList = list;
	while (curList != null) {
		if (curPos === 0) {
			return curList.value;
		}
		curList = curList.rest
		curPos--
	}
	// If we reach this point, then curList = null (empty list) and curPos
	// is not 0, which means that the list did not contain an element at
	// the given position.
	return undefined
}

function prepend(element, list) {
	return { 'value':element, 'rest':list };
}

// Problem 4: Deep comparison
// Preconditions: obj1 and obj2 are two javascript objects whose
// iterable properties are not functions, and which are non-circular
// objects.
// Postconditions: If obj1 and obj2 met the preconditions, and the two
// objects were either the exact same object, or had all their
// properties equivalent in value, then the function returns true.
function deepEqual(obj1, obj2) {
	// Strictly speaking, the helper does not test for absolute equality,
	// but rather it tests to see if all the properties of obj1 are in
	// obj2 and have the same values. If obj2 contains more properties
	// than obj1, then the result will still be true. So this is more like
	// a 'subset' operator. 
	function iterHelper(compareProps1, compareProps2) {
		while (true) {
			// If there's nothing to search through which differentiates the
			// two objects, then the two objects are deeply equivalent. For
			// two objects to be different, there must be a pair of
			// corresponding properties (properties with the same name) that
			// are different. In this case, there are none, trivially.
			if (compareProps1.length === 0 && compareProps2.length === 0) {
				return true;
			} else if (compareProps1.length === 0 ||
								 compareProps2.length === 0) {
				// Equivalent objects have the same number of properties.
				return false;
			}

			// We now know that neither list is empty, so we can start asking
			// questions about properties in the list to compare.
			var first = compareProps1.shift()
			var second = compareProps2.shift()

			if (first === second) {
				continue;
			} else if (typeof first !== typeof second) {
				return false;
			} else if (typeof first === 'object' && typeof second === 'object') {
				if (first === null || second === null) {
					return false;
				}
				for (var prop in first) {
					// Equivalent objects have all the same properties.
					if (!(prop in second)) {
						return false;
					}
					compareProps1.push(first[prop]);
					compareProps2.push(second[prop]);
				}
			// At this point, the properties were not the same object, but of
			// the same type, which were not of type 'object'. The properties
			// are not equivalent, and thus the objects are not equivalent.
			} else {
				return false;
			}
		}
	}
	// Going with the subset analogy from before, we know that obj1 = obj2
	// if they're both subsets of each other.
	return iterHelper([obj1], [obj2]) && iterHelper([obj2], [obj1]);
}


// Do not modify below here.
module.exports = {
  range, sum, reverseArray, reverseArrayInPlace,
  arrayToList, listToArray, nth, prepend, deepEqual
};
