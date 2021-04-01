// capitalizeFirstLetters.js
const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE


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