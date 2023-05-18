//By value vs By Reference
// By Value 
const num1 = 1;
const num2 = 1;
console.log(num1 === num2);//true

// By reference 
const arr1 = [1,2,3];
const arr2 = [1,2,3];
console.log(arr1 === arr2);//false

// Cách so sánh 2 mản cơ bản
// JSON: JavaScript Object Notation
// JSON.stringify(value) -> Covert giá trị sang dưới dạng JSON string
// JSON.parse(value) -> Convert JSON string sang kiểu dữ liệu tương ứng
const arr1Str = JSON.stringify(arr1);
const arr2Str = JSON.stringify(arr2);
console.log(arr1Str === arr2Str); //true

// 2 cách sao chép một mảng 
const students = ["a", "b", "c", "d", "e"]
//1 sử dụng .slice
const sliceStudent = students.slice()

// 2.spread operator[... array]
const spreadStudent = [...students]

// 2 cách gộp mảng
// concat
// array1.concat(array2,array3,arrayN)
const array1 = [1,2]
const array2 = [3,4]
const array3 = [5,6]
const mergeArray = array1.concat(array2, array3);
console.log(mergeArray)
// spread operator[... array]
const mergeArray2 = [...array1,...array2,...array3];
console.log(mergeArray2)

// Destructuring
const vehicles = ['mustang', 'f-150', 'expedition'];
const [x,y,z] = vehicles
console.log(x,y,z)
// rest parameter -> Phần còn lại
const [a,...rest] = vehicles
console.log(rest)