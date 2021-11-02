# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @akhan445/lotide`

**Require it:**

`const _ = require('@akhan445/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first element of an array. If the array is empty, returns undefined.

* `tail(array)`: Returns a sliced array with all elements excluding the first one. If the array passed is empty or has one element, return an empty array.

* `middle(array)`: Returns the elements located at the middle-most index(es) of an array. If the array length is odd, returns an array with element located at the middle. If the array length is even, returns the two elements located in the middle. If the array contains 2 or fewer elements, returns an empty array.

* `takeUntil(array, callback)`: Returns an array consisting of elements until a condition is met specified using the callback function.  

* `without(source, itemsToRemove)`: Returns an array consisting of elements exluding elements specified. Requires two arrays as parameters- 1) The array to filter and 2) the items to remove from the array. If either array passed is empty, returns an empty array.

* `map(array, callback)`: Returns a array mapped using specifications described in the callback function. Similar to javascipt's map method.

* `countLetters(string)`: Returns an object containing the frequencies of each letter in a string. Stores key:value pair as { letter:frequency }. If the string is empty, returns undefined.

* `countOnly(allItems, itemsToCount)`: Returns an object containing the frequencies of names appearing in a lit. Requires an array to be passed as a parameter and an object of names with a boolean value (true to be counted and false to not be counted).

* `letterPositions(string)`: Returns an object listings all the letters found in a string and their index positions i.e for "hello" { l: [2, 3]}. If the string is empty, returns undefined.

* `findKey(object, callback)`: Given a callback function, returns the first key passing the condition specified. 

* `findKeyByValue(object, value)`: Returns the key associated with the specified value. If it does not exist, returns undefined.

* `assertEqual(actual, expected)`: Assertion function which tests the strict equality of two passed values and prints results to console.

* `assertArraysEqual(actualArray, expectedArray)`: Assertion function which tests the deep equality of two passed arrays and prints results to console.

* `assertObjectsEqual(actualObject, expectedObject)`: Assertion function which tests the deep equality of two passed objects and prints results to console.

* `eqArrays(array1, array2)`: Function which performs a deep equality comparison of two passed arrays. Compares each element as parallel indices for strict equality.

* `eqObjects(object1, object2)`: Function which performs a deep equality comparison of two passed objects. Compares each key:value pair for strict equality.