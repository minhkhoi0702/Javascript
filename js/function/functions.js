// 1.function declarations
// Syntax: function functionName(parameters){}
// Không có return kết quả trả về undefined

// 2.khai báo giá trị mặc định cho function 
// Syntax: function functionName(parameters = defaultValue){}
// Your code here:
function sum(a=0,b=0){
    return a +b;
}
console.log(sum(10,5))

// 3.Lưu function vào biến rồi gọi sau
function add(a=0,b=0){
    return a + b;
};
const sum2 =add;// gán function add vào biến sum2 nhưng chưa được gọi

// 4.Tham số là function
// Vd: Tính trung bình 2 số a,b
function average(a, b, fn){
    const total = fn(a,b)
    return total/2
}
let result = average(5,10,sum2)
console.log(result)

// Anonymous function(function expression)
const logName = function(){
    console.log("Your Name")
}
logName();

// 5. IIFE -> immediately invoke function execution
(function(){
    console.log("This is IIFE function")
})()

// 6.Scope (phạm vi biến mà ta có thể truy xuất được)
// Global scope, function scope
let myName = "Johnny" //Global scope (truy suất mọi nơi)

function logYourName(){
    let myName2 = "Khoi" // function scope ( Chỉ hoạt đông trên function chứa nó)
}
// block scope (biến chỉ hoạt động bên trong function)
if (2>1){
    let message = "Hello I'm Johnny"
}
// console.log(message) //không chạy được vì message định nghĩa trong function

// lexical scope
let aNewName = "Johnny" // global scope
function sayHello(){
    let message = "Hello" //block scope
    console.log(`${message} ${aNewName}`)
}
// sayHello()

// closure
// function con có thể truy xuất scope của function cha

// VD1
// parent function
function sayHello1(){
    let message = "Hi"
    // inner function
    function sayHi(){
        console.log(message);
    }
    return sayHi;
}
 let hello1 = sayHello1();
 hello1()

// VD2
 function sayHello3(message){
    return function hiYourName(name){
        console.log(`${message} ${name} `)
    }
 }
 let hello2 = sayHello3("Welcome to JavaScript")
 hello2("Closure")
 
