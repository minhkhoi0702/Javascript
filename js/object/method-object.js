const student = {
  name: "Johnny",
  age: 24,
  male: true,
  "last-name": "Khoi",
  hi: function () {
    console.log("hello evondev");
  },
};
// object.key(object) -> trả về 1 mảng chứa các keys của object
const keys = Object.keys(student);
console.log(keys);
//object.value(object) -> trả về 1 mảng chứa giá trị của key
const values = Object.values(student);
console.log(values);
