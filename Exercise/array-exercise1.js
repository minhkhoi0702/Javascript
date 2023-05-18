// 1.Đảo ngược một chuỗi. Vd:"My name is Johnny" -> "Johnny is name my"
// function reverseString(str){
//     if(!str) return null;
//     const newStr = str.split(" ").reverse().join(" ")
//     return newStr
// }
// console.log(reverseString("My name is Johnny"))

// 2.Đảo ngược chuỗi và đảo ngược chữ trong chuỗi
// function reverseWords(str) {
//   if (!str) return null;
//   const arrStr = str
//     .split(" ")
//     .reverse()
//     .map(function (value) {
//       return value.split("").reverse().join("");
//     })
//     .join(" ");
//   return arrStr;
// }

// console.log(reverseWords("My name is Johnny"));

//  3.In hoa chữ cái đầu mỗi từ trong chuỗi VD "my name is johnny" -> "My Name Is Johnny"
function capitalizeFirstLetter(word="") {
    if (word.length === 0) {
        return null;
    }
    let newWord = word.charAt(0).toUpperCase();
    let otherWord =word.slice(1).toLowerCase();
    return `${newWord}${otherWord}`
}

function capitalizeStr(str){
    if (!str) return null;
    const newStr = str
    .split(" ")
    .map((value) => capitalizeFirstLetter(value))
    .join(" ");
    return newStr
}
console.log(capitalizeStr("my name is johnny"))

