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
 * how to perform a loop over an array an action, aggregate the result of each iteration and return a single value.
 */


/**
 * The Solution:
 * use the reduce method
 *
 * reduce method takes a callback function as an argument and returns a single value
 * usage: array.reduce(callback)
 */
