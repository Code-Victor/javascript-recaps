/**
 * Extras
 * 
 * 1. getting unique values from an array
 * 2. "for of" & "for in" loops
 * 3. String.includes() & Array.includes()
 */

const person = {
  name: "John Doe",
  age: 50,
  eyeColor: "blue",
  address: {
    street: "50 Main street",
    city: "Boston",
    state: "MA",
    zipCode: "02101",
  },
};
// 1. Getting unique values
const variousNumbers= [1,2,2,3,4,4,5,6]
const uniqueValues= new Set(variousNumbers)
console.log([...uniqueValues])
console.log(Array.from(uniqueValues))

// for ... in loops are used to loop through the contents of arrays
for (let number of variousNumbers){
  console.log(number)
}

// for ... of loops are used to loop through the contents of objects
for (let keys in person){
    console.log(keys,person[keys])
}

//

