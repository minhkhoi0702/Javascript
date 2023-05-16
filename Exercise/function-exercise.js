// Ex1: Check to numbers and return true if one of the numbers is 100 or if the sum of two numbers is 100
// const checked = function(a,b) {
//     if(a === 100 || b ===100 || a+b ===100){
//         console.log("This is true")
//     }else{
//         console.log("This is false")
//     }
// }
// checked(50,50)

// Ex2: check to two numbers and return the biggest number
// const check = function(a,b) {
//     if(a>b){
//         console.log(`the biggest number is ${a}`)
//     }else if(a<b){
//         console.log(`the biggest number is ${b}`)
//     }else{
//         console.log("two numbers are equal")
//     }
// }
// check(10,50)

// function compare(a=0,b=0) {
//     if (typeof a !=="number" || typeof b !=="number") {
//         console.log("Please enter a number")
//         return
//     };

//     return Math.max(a,b); 
// }
// console.log(compare(100,50))

// EX3: capitalize first letter
// function capitalizeFirstLetter(word="") {
//     if (word.length === 0) {
//         return null;
//     }
//     let newWord = word.toLowerCase().charAt(0).toUpperCase();
//     let otherWord =word.slice(1).toLowerCase();
//     return `${newWord}${otherWord}`
// }

// console.log(capitalizeFirstLetter("TUAN"))

// EX4: Viết hàm sử dụng callback in ra kết quả của hàm EX2
function compare(a=0,b=0) {
    if (typeof a !=="number" || typeof b !=="number") {
        console.log("Please enter a number")
        return
    };

    return Math.max(a,b); 
}

function useCallback(a,b, callback) {
    let max = callback(a,b);
    console.log("Max number is " + max)
}

useCallback(500,1000,compare)