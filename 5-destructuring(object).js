/**
 * Destructuring Object
 * 
 * Destructuring is a faster/easier way to access/unpack variables from objects
 */

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue'
};


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