// Cho mảng gồm nhiều giá trị,loại bỏ các giá trị falsy ra khỏi mảng chỉ giữ lại giá trị truthy
const array = [1,1000,0,false,null,"Johnny","",undefined,[1,2,3],NaN]
const filterFalsy = array.filter((value) => Boolean(value))
// console.log(filterFalsy)
// flatten mảng 
const complexArray = [[1,2,3,["abc","def"]],[1,2,3,[true,false]],[1,2,3,[90]]]
const result = complexArray.flat(2)
// console.log(result)
// đảo ngược số nguyên
function reverseNumber(number){
    //covert to string
    const value =number.toString().split("").reverse().join("")
    // cover to number
    const newNumber = parseInt(value) * Math.sign(number)
    return newNumber
}
// console.log(reverseNumber(-1234))

// Viết chương trình với đầu vào là một số nguyên, cho chạy từ một đến số nguyên đó rồi kt nếu số chia hết cho 2 thì in ra chữ "Fizz",nếu chia hết cho 3 thì in ra "Buzz",nếu chia hết cho 2 và 3 thì in ra "FizzBuzz"
function fizzBuzz(number){
    for (let i = 1;i <= number;i++){
        if(i % 3 === 0 && i % 2 === 0){
            console.log("FizzBuzz")
        }else if(i % 2 === 0){
            console.log("Fizz")
        }else if(i % 3 === 0){
            console.log("Buzz")
        }
    }

}
// fizzBuzz(10)

// Cho một chuỗi bất kỳ ,đếm số lượng ký tự "vowels" có trong chuỗi
// vowels là các ký tự u e o a i

function countVowels(string){
    let count = 0;
    const characeters ="ueoai" 
    for (let c of string.toLowerCase()) {
        if (characeters.includes(c)) count++;
    }
    return count;

}
// console.log(countVowels("evondev"))

// viết function trả về một mảng có giá trị unique
const array1 = [1,1,1,3,2,4,2,5,5,7,5,6]
function unique(arr){

    let result = [];
    if(!Array.isArray(arr)) return result
    for (let i =0; i < arr.length; i++){
        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result;

}
// console.log(unique([1,1,1,3,2,4,2,5,5,7,5,6]))

// Viết function xử lý 1 mảng lowns thành nhiều mảng nhỏ dựa vào số nguyên đầu vào
// vd:function([1,2,3,4,5],2) -> [[1,2],[3,4],[5]]
function splitArray(array, number){
    let result = []
    let index = 0;
    while(index < array.length){
        result.push(array.slice(index,index+ number));
        index = index + number
    }
    return result
}
// console.log(splitArray([1,2,3,4,5],2))
