// sort
const random = [1, 999, 100, 5, 9];
console.log(random.sort()); // [1, 10, 5, 9, 999]
console.log(random.sort((a,b) => a-b)) //[1, 5, 9, 10, 999]
console.log(random.sort((a,b) => b-a)) //[999, 10, 9, 5, 1]
