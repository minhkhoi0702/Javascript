// string to num
const stringToNumber = "7.2"
console.log(Number(stringToNumber))
console.log(parseInt(stringToNumber));
console.log(parseFloat(stringToNumber));

const num = 7.56565656
// take the absolute value
console.log(Math.abs(num));
// take round number
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));
console.log(parseFloat(num.toFixed(2)))

// random number
console.log(Math.random())
// random 0..10
console.log(Math.round(Math.random() * 10))
// NaN -> Not a number
console.log(isNaN("This is not a number"))// true
console.log(isNaN("123456"))// false
// Number.isNaN
console.log(Number.isNaN(NaN))// true


