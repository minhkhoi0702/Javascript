// combine strings
const myName = "Minh Khoi"
const myJob = "Developer"
const newStr = "My name is " + myName + " and I am " + myJob;
// ${variable}
const newStr1 = `My name is ${myName} and I am ${myJob}`;
//.lenghth
console.log(newStr1.length)
//.split
console.log(newStr1.split(" "));
// .toLowerCase(), toUpperCase()
console.log(newStr1.toUpperCase());
// .startsWith(), .endsWith(), .includes()
console.log(newStr1.startsWith("My name is "))
console.log(newStr1.includes(`${myName}`))
// .indexOf(), .lastIndexOf()
console.log(newStr1.indexOf("M"))
// .replace()
console.log(newStr1.replace("Developer","Drafter"))
// .repeat()
console.log(newStr1.repeat(2))
// .slice(start, end)
// .trim(), .trimStart(), .trimEnd() 
// .charAt(index)

// Kết hợp các phương thức trên 
const newStr2 ="     Frontend Developer   "
// Loại bỏ khoảng cách , đưa về in hoa, thay Frontend thành BIM
console.log(
    newStr2
    .trim()
    .replace("Frontend","BIM")
    .toUpperCase()
    )