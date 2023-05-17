// Tạo mảng
const random = [1, 999, 100, 5, 9];

// find() trả về phần tử tìm thấy đầu tiên thỏa điều kiện
// tìm phần tử đầu tiên trong mảng lớn hơn 10
const findNumber = random.find((element) => element > 10  )
// Nếu ko tìm thấy trả kết quả undefined
console.log(findNumber)

// findIndex() trả về vị trí index đầu tiên tìm thấy thỏa điều kiện
const findIndex = random.findIndex((element) => element > 10  )
// Nếu không tìm thấy trả về kết quả -1
console.log(findIndex)