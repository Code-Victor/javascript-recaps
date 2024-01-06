/**
 * Rest Operator (Object)
 *
 * The rest operator is used to get the rest of the items in an object.
 */

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

const { eyeColor, ...needed } = person;

// console.log(eyeColor)
console.log(needed);


// React Component Example: creating a custom `Link` component.
/**
 * function Link({stylish,...otherProps}){
 * if (stylish){
 *  ...
 * }
 * return <a {...{otherProps}}/>
 * }
 */

/**
 * Spread Operator (Object)
 *
 * The spread operator is used to expand an object.
 */

const aNumber = 10;
console.log({ ...needed,eyeColor });
