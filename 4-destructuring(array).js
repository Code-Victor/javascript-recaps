// @ts-nocheck

/**
 * Destructuring Array
 *
 * Destructuring is a faster/easier way to access/unpack variables from arrays
 * Tip: just try to mirror the structure of the array/object
 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// 👇🏾 the old way
const banana = fruits[0];
console.log(banana);

const [first, second] = fruits;
console.log(first, second);

/**
 * const stateArr= React.useState("Hello")
 * const [state,setState]=stateArr
 */

// Nested destructuring
const nestedFruits = ["Banana", ["Orange", ["Apple"], "Mango"]];

const [banana2, [orange, [apple]]] = nestedFruits;
console.log(banana2, orange, apple);
