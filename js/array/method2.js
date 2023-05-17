//.map(callback(value,index,array){})
//duyệt qua từng phần tử trong mảng trả về mảng mới thay đổi hoặc không thay đổi so với mảng ban đầu
const listNumber = [1,2,3,4,5]
// trả ra mảng mới mà các số trong mảng cũ nhân 2
const newListNumber = listNumber.map(function(value,index){
    return value*2
})
console.log(newListNumber)

// .forEach(callback(value,index,array){}) 
// duyệt qua từng phần tử trong mảng
listNumber.forEach((value,index) => console.log(value))

// filter(callback(value,index,array){}) lọc các phần tử trong mảng thỏa mãn đk
const greaterThree = listNumber.filter((value) => value > 3)
console.log(greaterThree)

// .some(), .every() trả về true hoặc false
// .some() Trả về true khi chỉ cần thỏa 1 điều kiện
const checkGreaterThree = listNumber.some((value) => value > 3)
console.log(checkGreaterThree)
// .every() Trả về true khi tất cả thỏa điều kiện
const checkGreaterZero = listNumber.every((value) => value > 0)
console.log(checkGreaterZero) //true
const checkGreaterTwo = listNumber.every((value) => value > 2)
console.log(checkGreaterTwo) //false

// reduce((a,b) => {},initial value)
const totalNumber = listNumber.reduce((previousValue, currentValue) =>{
    return previousValue + currentValue;
},0)

console.log(totalNumber)