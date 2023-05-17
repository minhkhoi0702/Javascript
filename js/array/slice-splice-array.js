// Tạo ra mảng
const animals = ["tiger", "lion", "sheep", "pig"]

// slice(): Tạo ra mảng mới giống mảng ban đầu
const animals2 = animals.slice()
console.log(animals2)
// slice(start) start: Vị trí index trong mảng
const animals3 = animals.slice(1)
console.log(animals3)
// slice(start,end) từ vị trí start đến end-1
const animals4 = animals.slice(1,3)
console.log(animals4)

// .splice() Xóa phần tử trong mảng hoặc thay thế phần tử trong mảng
const pets = ["dog", "cat", "bird", "dragon"];

// const pets2 = pets.splice(2)// [ "bird", "dragon"]
// console.log(pets); // ["dog", "cat"];

// splice(start,deleteCount) deleteCount:Số lượng phần tử muốn xóa hoặc thay thế
// const pets3 = pets.splice(1, 1);
// console.log(pets); //['dog', 'bird', 'dragon']

// splice(start,deleteCount,item1,item2,itemN) item: thay thế phần tử đã xóa bằng phần tử mới
const pets3 = pets.splice(0,2,"dinasour")
console.log(pets)
