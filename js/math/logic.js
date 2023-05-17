// Number(value)
console.log(Number("7.2"));
console.log(Number("abc"));
console.log(Number(undefined));
console.log(Number(NaN));
console.log(Number(""));
console.log(Number(null));
console.log(Number(false));
console.log(Number(true));

// String(value) -> string

// Boolean(value) -> true or false

// type coercion
console.log(10+10); // number -> 20
console.log(10+"10"); //string -> 1010
console.log(10 - "10"); //0
console.log("" - 1) //-1
console.log("" - 1) //-1
console.log(null +10) //10

// Toán tử so sánh > <, >= ,<= 
console.log(6 >= 6) // true

// Toán tử logic : && || !
console.log(5>7 && 7>5) // false
console.log(5>7 || 7>5) // true
const bool = false
console.log(!bool) // true

// == 
console.log(10 == "10") //true
console.log(true == 1) //true
console.log( 1 == "01") //true
console.log(null == "")//false
// ===
console.log(10 === "10") //false
console.log(10 !== "10") //true


