// @ts-nocheck

const names = ["victor", "jose", "maria", "julia", "joehana"];

const people = [
  {
    name: "victor",
    age: 20,
    job: "developer",
  },
  {
    name: "jose",
    age: 25,
    job: "ui/ux designer",
  },
  {
    name: "maria",
    age: 30,
    job: "Cloud engineer",
  },
  {
    name: "julia",
    age: 26,
    job: "project manager",
  },
  {
    name: "joehana",
    age: 26,
    job: "data scientist",
  },
];

/**
 * The Problem:
 * how to filter an array content based on a condition.
 */


/**
 * The Solution 1:
 * use the filter method
 *
 * filter method takes a callback function as an argument and returns a new array with the result of each iteration
 * usage: array.filter(callback)
 */

const result = people.filter((person, i) => {
  return person.name==="victor";
});
console.log(result)

/**
 * The Solution 2:
 * use the find method
 *
 * find method takes a callback function as an argument and returns the first element that matches the condition
 * usage: array.find(callback)
 */

const result2 = people.find((person, i) => {
  return person.name === "victor";
});
console.log(result2);