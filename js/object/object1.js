// 1 Cách khai báo

// object constructor
const objectConstructor = new Object();

// object literal
const objectLiteral = {};

const student = {
  name: "Johnny",
  age: 24,
  male: true,
  "last-name": "Khoi",
  hi: function () {
    console.log("hello evondev");
  },
};
// 2 cách truy xuất giá trị của object
// 2.1 dot notation
console.log(student.name);
// 2.2 Brackets notation ["key"]
console.log(student["age"]);

// 3 thay đổi giá trị của object
student.age = 20;
student.isDeveloper = true;
console.log(student);

// 4 cách xóa giá trị trong object
delete student["last-name"];
console.log(student);

// 5 for in
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}
