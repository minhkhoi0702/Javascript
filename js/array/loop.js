// vòng lặp
const number = [1,2,3,4,5,6,7,8,9,10]

// for (let i = 0; i < number.length; i++) {}

for (let i = 0; i < number.length; i++){
    // Nếu giá trị là 8 thì dừng vòng lặp
    // console.log(`The value is ${number[i]}`)
    // if(number[i] === 8){
    //     break
    // }

    // Nếu giá trị là 8 thì bỏ qua
    if(number[i] === 8){
        continue
    }
    // console.log(`The value is ${number[i]}`)
   
}
// Đổi chiều
for (let i = number.length - 1; i >= 0; i--){
    // console.log(`The value is ${number[i]}`)
}

//Ex1: Sao chép mảng dùng vòng lập for
// let copyArray = []
// for (let i = 0;i < number.length;i++){
//     copyArray.push(number[i])
// }
// console.log(copyArray)

// Ex2: Đảo ngược từ
// let str = "My name is Johnny"
// let result =""
// for (let i = str.length - 1; i >= 0; i--){
//     // console.log(str[i])
//     result = result + str[i];
// }
// console.log(result)

// Vòng lặp while và do while
// while -> Check đk trước rồi mới xử lý
// let a = 1;
// while(a <5){
//     console.log(`Number is ${a}`)
//     a = a +1
// }

// do while -> chạy xong mới check đk đúng thì dừng
// let b =1;
// do{
//     b++;
//     console.log(`Number is ${b}`)
// }while(b<5)

// for of
// for(item of array){}
for (item of number){
    console.log(item)
}
