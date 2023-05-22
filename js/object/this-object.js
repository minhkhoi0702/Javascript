const student = {
  name: "Johnny",
  age: 24,
  male: true,
  "last-name": "Khoi",
  hi: function () {
    console.log(`my name is ${this.name} and my age is ${this.age}`);
  },
  // fullname: {
  //     name: "Nguyen Minh Khoi"
  // }
};
student.hi();
//   optionnal chaining
console.log(student.fullname?.name);
// destructuring object
const { name, age, male, ...rest } = student;
console.log(name, age, male);
console.log(rest);
// function with object parameters
function whatYourInfo(object) {
  console.log(object.name, object.age, object.male);
}
whatYourInfo(student);
// object destructuring parameters
function whatYourInfo2({ name, age, school }) {
  console.log(name, age, school);
}
whatYourInfo2({
  name: "Minh Khoi",
  age: 24,
  school: "Kien Truc",
});
