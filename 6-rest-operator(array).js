//@ts-nocheck
/**
 * Rest Operator (Array)
 *
 * The rest operator is used to get the rest of the items in an array.
 * Note: the rest operator must be the last item in the array.
 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];

const [banana, ...others] = fruits;
console.log(banana);
console.log(others);

const [mango, ...others2] = fruits.slice().reverse();
console.log(mango);
console.log(others);

// function example: get the sum of all numbers
function addition(...values) {
  return values.reduce((acc, curr) => curr + acc, 0);
}
console.log(addition(20, 50, 69, 484, 4848, 444));

/**
 * Spread Operator (Array)
 *
 * The spread operator is used to expand an array.
 */
const toAdd = [20, 50, 69, 484, 4848, 444];
console.log(addition(...toAdd));

const arr1 = [1, 2];
const arr2 = [3, 4];

console.log(arr1.concat(arr2));

console.log([...arr2,...arr1,])
