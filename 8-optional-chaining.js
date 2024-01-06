/**
 * Optional Chaining
 *
 * Optional chaining allows us to access deeply nested object properties without worrying if the property exists or not.
 */

const person = {
  name: "John Doe",
  age: 50,
  // eyeColor: "blue",
  address: {
    street: "50 Main street",
    city: "Boston",
    state: "MA",
    zipCode: "02101",
  },
};

console.log(person.eyeColor?.replace("l", "y") ?? "brown"); // 👈🏾 Optinal chaining for arrays

const people = [
  {
    name: "John Doe",
    age: 50,
    eyeColor: "blue",
    address: {
      street: "50 Main street",
      city: "Boston",
      state: "MA",
      zipCode: "02101",
    },
  },
  {
    name: "Jane Doe",
    eyeColor: "blue",
    address: {
      street: "50 Main street",
      // city: "Boston",
      state: "MA",
      zipCode: "02101",
    },
  },
];

console.log(people[1]?.address?.city ?? "No city found"); // 👈🏾 Optinal chaining for arrays
