// 2 cách tạo mảng

// array literals
const student = [];
// array constructor
 const student1 = new Array();

//Vd Mảng:
const array = ["Johnny","Khoi","Minh","Nguyen"]

// index: vị trí của phần tử trong mảng bắt đầu từ 0
// length:Độ dài của mảng,bắt đầu từ 1
console.log(student.length);
// Truy suất phần tử trong mảng
console.log(array[0])
// Lấy phần tử cuối cùng
console.log(array[array.length - 1])

// Đảo chiều mảng
console.log(array.reverse())

// joint-> nối các phần tử trong mảng thành chuỗi
console.log(array.join("-"))
