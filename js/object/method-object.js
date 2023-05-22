const student = {
  name: "Johnny",
  age: 24,
  male: true,
  "last-name": "Khoi",
  hi: function () {
    console.log("hello evondev");
  },
};
// Object.key(object) -> trả về 1 mảng chứa các keys của object
const keys = Object.keys(student);
console.log(keys);
//Object.value(object) -> trả về 1 mảng chứa giá trị của key
const values = Object.values(student);
console.log(values);
// Object.entries(object) -> trả về 1 mảng nested [["name","Johnny"],["age",24]] gồm có key,value
const entries = Object.entries(student);
console.log(entries)
// Object.assign()
const a = {
  firstName: "Minh",
}
const b = {
  lastName: "Khoi"
}
const c = Object.assign(a,b)
console.log(c)
const d = {...a,...b}
console.log(d)
// Object.freeze(object) -> ngăn chặn chỉnh sửa key và value của object
const car = {
  brand: "BMW"
}
const newCar = Object.freeze(car)
car.brand = "Audi"
console.log(newCar)
// Object.seal(object) -> cho phép chỉnh sửa key và value cũ nhưng ko đc thêm key và value mới
const user = {
  userName: "Johnny",
  school: {
    name: "Kien Truc",
    room: {
      name: "Civil",
    }

  }
};

// const newUser = Object.seal(user)
// newUser.userName = "Minh Khoi"
// newUser.lastName = "Nguyen"
// console.log(newUser)

// Sao chép một object ( chỉ sao chép 1 cấp,các nested opject bên trong thay đổi theo objec mới)
const newUser2 = {...user};
newUser2.userName = "trananhtuan"
console.log(user)
console.log(newUser2)
// Sao chép một opject phức tạp
const  newUser3 = JSON.parse(JSON.stringify(user))
newUser3.school.name = "Bach Khoa"
console.log(user)
console.log(newUser3)



