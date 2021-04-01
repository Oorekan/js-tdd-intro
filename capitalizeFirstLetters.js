// capitalizeFirstLetters.js
const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE
/* function capitalizeFirstLetters(input) {
    let output = "";
    for (let i = 0; i < input.length; i += 1) {
        if (i === 0) {
            output += input[0].toUpperCase();
        }
        else if (input[i - 1] === " ") {
          output += input[i].toUpperCase();
        }
        else {
            output += input[i];
        }
    }
    return output;
} */

function capitalizeFirstLetters(input) {
    let output = "";
    for (let i = 0; i < input.length; i += 1) {
        if (i === 0 || input[i - 1] === " ") {
            output += input[i].toUpperCase();
        }
        else {
            output += input[i];
        }
    }
    return output;
} 

console.log(capitalizeFirstLetters("javaScript"));
console.log(capitalizeFirstLetters("b"));
console.log(capitalizeFirstLetters(""));
console.log(capitalizeFirstLetters("blackpink in your area"));
console.log(capitalizeFirstLetters("blackpink     in     your     area"));

// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, "function");

// Check that capitalizeFirstLetters accepts multiples arguments
assert.strictEqual(capitalizeFirstLetters.length, 1);

// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirstLetters("javaScript"), "JavaScript");

// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters("s"), "S");

// Check that it works for multiple strings
assert.strictEqual(capitalizeFirstLetters("blackpink in your area"), "Blackpink In Your Area");

// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(""), "");