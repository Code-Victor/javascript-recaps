/**
 * Dynamic Object Keys
 *
 * You can use dynamic keys in objects using the square brackets notation.
 */

function highOrLow(value) {
  return {
    [value > 10 ? "high" : "low"]: true,
  };
}

console.log(highOrLow(40))
