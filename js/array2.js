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