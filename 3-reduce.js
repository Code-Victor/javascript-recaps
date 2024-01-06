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
 * how to perform a loop over an array an action, aggregate the result of each iteration and return a single value.
 */
let sum = 0;

people.forEach((person) => (sum += person.age));

console.log(sum);
/**
 * The Solution:
 * use the reduce method
 *
 * reduce method takes a callback function as an argument and returns a single value
 * usage: array.reduce(callback)
 */

// Example 1: sum all ages
const sum2= people.reduce((accumulated, currentValue, currentIndex) => {
  let addition= accumulated+currentValue.age
  console.log(addition)
  return addition
},0);
console.log(sum2)

const arr= [[0,1],[2,3],[4,5],[6,7]]

// Example 2: flatten an array
const flatArr=arr.reduce((acc,curr,i)=>{
  return acc.concat(curr)
},[])
console.log(flatArr)