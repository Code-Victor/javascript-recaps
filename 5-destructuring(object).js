/**
 * Destructuring Object
 * 
 * Destructuring is a faster/easier way to access/unpack variables from objects
 * Tip: just try to mirror the structure of the array/object
 */

const starBoy = {
    firstName: 'Victor',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue'
};

const {firstName: developer}=starBoy

console.log(developer)


// Nested destructuring
const anotherPerson = {
    name: 'John Doe',
    age: 50,
    eyeColor: 'blue',
    address: {
        street: '50 Main street',
        city: 'Boston',
        state: 'MA',
        zipCode: '02101'
    }
};

const {address:{city}}=anotherPerson
console.log(city)