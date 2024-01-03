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
 * how to perform a loop over an array content,perform an action and store the result of each iteration in a new array
 */


/**
 * The Solution:
 * use the map method
 * 
 * map method takes a callback function as an argument and returns a new array with the result of each iteration
 * usage: array.map(callback)
 */
