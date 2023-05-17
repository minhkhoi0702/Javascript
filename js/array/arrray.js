// 2 cách tạo mảng

// array literals
const student = [];
// array constructor
 const student1 = new Array();

//Vd Mảng:
const array = ["Johnny","Khoi","Minh","Nguyen","Khoi"]

// index: vị trí của phần tử trong mảng bắt đầu từ 0
// length:Độ dài của mảng,bắt đầu từ 1
console.log(student.length);
// Truy suất phần tử trong mảng
console.log(array[0])
// Lấy phần tử cuối cùng
console.log(array[array.length - 1])

// Đảo chiều mảng
// console.log(array.reverse())

// joint-> nối các phần tử trong mảng thành chuỗi
console.log(array.join("-"))

// includes
console.log(array.includes("Johnny"))

// indexOf -> trả về phần tử đầu tiên tìm thấy
console.log(array.indexOf("Khoi"))

// lastIndexOf -> trả về phần tử đầu tiên tìm thấy
console.log(array.lastIndexOf("Khoi"))

// push -> thêm phần tử vào cuối mảng
array.push("Javascript")
//unshift -> thêm phần tử vào đầu mảng
array.unshift(7)
console.log(array)

// pop -> xóa phần tử cuối cung trong mảng
array.pop()
// shift -> xóa phần tử đầu tiên trong mảng
array.shift()
console.log(array)