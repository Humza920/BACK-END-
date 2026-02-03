// require("./abc.js");

// const {d ,sumFunction , minusFunction} = require("./abc.js");

// d = "UZAIR"
// console.log(`Hello,${d} ! This is the app.js file.`);
// const a = 200
// const b = 300;

// sumFunction(a, b)
// console.log(`Sum is: ${sumFunction(a, b)} app.js file`);
// minusFunction(a, b)
// console.log(`Minus is: ${minusFunction(a, b)} app.js file`);

const {multiply , devide} = require("./calculate/index.js");


const a = 20;
const b = 10;

console.log(`Multiply is: ${multiply(a, b)} app.js file`);
console.log(`Devide is: ${devide(a, b)} app.js file`);